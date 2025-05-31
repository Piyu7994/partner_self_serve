import React, { useState, useEffect } from 'react'
import { View, StyleSheet, Image, Text, TouchableOpacity, ScrollView, RefreshControl, Keyboard } from 'react-native'
import { Header, TransparentPill, AddLogo, Alert, DoctorItemGeneral, Input, InfoCard } from '@practo/self-serve'
import { Button } from '../SurgeryOverviewCard/SurgeryOverviewCard'
import BottomSheet from '../../../containers/common/BottomSheet/BottomSheetContainer'
import { RemoveModal } from '../../RemoveModal/RemoveModal'
import { useNavigation } from '@react-navigation/native'

interface SurgeryData {
    hospitalName: string;
    surgeryName: string;
    showRatingButton: boolean;
    surgeryPrice: {
        minPrice: number | null;
        maxPrice: number | null;
    };
    pillText: string;
    reviewCount: number;
    rating: number;
    surgeryDescriptionQuestion: string | null;
    surgeryDescription: string | null;
    showMedia: boolean;
    doctorData: Array<{
        name: string;
        post: string;
        fee?: number;
        experience: number;
        stories?: number;
    }>;
}

const ModalChildrenPrice = ({ onSave, onClose }: { onSave: (min: number | null, max: number | null) => void, onClose: () => void }) => {
    const [minPrice, setMinPrice] = useState<string>('');
    const [maxPrice, setMaxPrice] = useState<string>('');
    const [error1, setError1] = useState<'Default' | 'Error'>('Default');
    const [error2, setError2] = useState<'Default' | 'Error'>('Default');
    const [isKeyboardVisible, setKeyboardVisible] = useState(false);

    useEffect(() => {
        const keyboardDidShowListener = Keyboard.addListener(
            'keyboardDidShow',
            () => {
                setKeyboardVisible(true);
            }
        );
        const keyboardDidHideListener = Keyboard.addListener(
            'keyboardDidHide',
            () => {
                setKeyboardVisible(false);
            }
        );

        return () => {
            keyboardDidShowListener.remove();
            keyboardDidHideListener.remove();
        };
    }, []);

    const handleSave = () => {
        const parsePrice = (price: string) => {
            if (!price) {
                setError1('Error');
                setError2('Error');
                return null;
            }
            // Remove commas and convert to number
            return parseFloat(price.replace(/,/g, ''));
        };

        const min = parsePrice(minPrice);
        const max = parsePrice(maxPrice);

        if(!min) {
            setError1('Error');
            setError2('Default');
            return;
        }
        if(!max) {
            setError2('Error');
            setError1('Default');
            return;
        }
        if(min > max) {
            setError1('Error');
            setError2('Error');
            return;
        }
        onSave(min, max);
        onClose();
    };

    return (
        <View>
            <View style={styles.inputContainer}>
                <Text>Minimum Price</Text>
                <Input
                    helperState={error1}
                    rightActionType="Cross"
                    state={error1}
                    type="Amount"
                    showLabel={false}
                    showHelperField={false}
                    keyboardType="numeric"
                    value={minPrice}
                    onChangeText={(text) => {
                        setMinPrice(text);
                    }}
                />
            </View>
            <View style={styles.inputContainer}>
                <Text>Maximum Price</Text>
                <Input
                    helperState={error2}
                    rightActionType="Cross"
                    state={error2}
                    type="Amount"
                    showLabel={false}
                    showHelperField={false}
                    keyboardType="numeric"
                    value={maxPrice}
                    onChangeText={(text) => {
                        setMaxPrice(text);
                    }}
                />
            </View>
            {!isKeyboardVisible && (
                <Button 
                    style={styles.inputBtn}
                    text='Save'
                    btnStyle='Fill'
                    type='Secondary'
                    size='Small'
                    onPress={handleSave}
                />
            )}
        </View>
    )
}

const ModalChildrenDescription = ({ onSave, onClose }: { onSave: (title: string, description: string) => void, onClose: () => void }) => {
    const [description, setDescription] = useState<string>('');
    const [title, setTitle] = useState<string>('');
    const [error1, setError1] = useState<'Default' | 'Error'>('Default');
    const [error2, setError2] = useState<'Default' | 'Error'>('Default');
    const [errText1, setErrText1] = useState<string | null>('');
    const [errText2, setErrText2] = useState<string | null>('');
    const [isKeyboardVisible, setKeyboardVisible] = useState(false);
    const MINLENGTHTITLE = 20;
    const MAXLENGTHTITLE = 60;
    const MINLENGTHDESCRIPTION = 60;
    const MAXLENGTHDESCRIPTION = 300;

    useEffect(() => {
        const keyboardDidShowListener = Keyboard.addListener(
            'keyboardDidShow',
            () => {
                setKeyboardVisible(true);
            }
        );
        const keyboardDidHideListener = Keyboard.addListener(
            'keyboardDidHide',
            () => {
                setKeyboardVisible(false);
            }
        );

        return () => {
            keyboardDidShowListener.remove();
            keyboardDidHideListener.remove();
        };
    }, []);

    const handleSave = () => {
        // Reset errors
        setError1('Default');
        setError2('Default');

        // Validate title
        if (!title.trim()) {
            setError1('Error');
            setError2('Default')
            return;
        }
        else{
            if (title.length < MINLENGTHTITLE) {
                setError1('Error');
                setError2('Default')
                setErrText1('Description title cannot be less than 20 characters')
                setErrText2(null)
                return;
            }
            if (title.length > MAXLENGTHTITLE) {
                setError1('Error');
                setError2('Default')
                setErrText1('Description title cannot be more than 60 characters')
                setErrText2(null)
                return;
            }
        }
        // Validate description
        if (!description.trim()) {
            setError2('Error');
            setError1('Default')
            return;
        }
        else{
            if (description.length < MINLENGTHDESCRIPTION) {
                setError2('Error');
                setError1('Default')
                setErrText2('Description cannot be less than 60 characters')
                setErrText1(null)
                return;
            }   
            if (description.length > MAXLENGTHDESCRIPTION) {
                setError2('Error');
                setError1('Default')
                setErrText2('Description cannot be more than 300 characters')
                setErrText1(null)
                return;
            }
        }
        // If both validations pass, save and close
        onSave(title, description);
        onClose();
    };

    return (
        <View>
            <View style={styles.inputContainer}>
                <Text>Description Title (required)</Text>
                <Input
                    helperState={error1}
                    rightActionType="Cross"
                    state={error1}
                    type="Text"
                    showLabel={false}
                    showHelperField={false}
                    keyboardType="default"
                    value={title}
                    onChangeText={(text) => {
                        setTitle(text);
                        setError1('Default');
                    }}
                />
                {errText1 && <Text style={styles.errorText}>{errText1}</Text>}
            </View>
            <View style={styles.inputContainer}>
                <Text>Description (required)</Text>
                <Input
                    helperState={error2}
                    rightActionType="Cross"
                    state={error2}
                    type="Text"
                    showLabel={false}
                    showHelperField={false}
                    keyboardType="default"
                    value={description}
                    onChangeText={(text) => {
                        setDescription(text);
                        setError2('Default');
                    }}
                />
                {errText2 && <Text style={styles.errorText}>{errText2}</Text>}
            </View>
            {!isKeyboardVisible && (
                <Button 
                    style={styles.inputBtn}
                    text='Save'
                    btnStyle='Fill'
                    type='Secondary'
                    size='Small'
                    onPress={handleSave}
                />
            )}
        </View>
    )
}

const ModalChildrenMedia = () => {
    return (
        <View>
            <View style={styles.mediaModalContainer}>
                <InfoCard
                    body=""
                    rightIcon="Arrow"
                    title="Choose from hospital photos & videos"
                    titleBodyGap={0}
                />
            </View>
            <View style={styles.mediaModalContainer}>
                <InfoCard
                    body=""
                    rightIcon="Arrow"
                    title="Upload new photos & videos"
                    titleBodyGap={0}
                />
            </View>
        </View>
    )
}

export interface SurgeryDetailsPageProps {
    hospitalName: string;
    surgeryName: string;
    showRatingButton: boolean;
    surgeryPrice: {
        minPrice: number | null;
        maxPrice: number | null;
    };
    pillText: string;
    reviewCount: number;
    rating: number;
    surgeryDescriptionQuestion: string | null;
    surgeryDescription: string | null;
    showMedia: boolean;
    doctorData: Array<{
        name: string;
        post: string;
        fee?: number;
        experience: number;
        stories?: number;
    }>;
    onRefresh?: () => Promise<any>;
}

const SurgeryDetailsPage: React.FC<SurgeryDetailsPageProps> = (props) => {
  const navigation = useNavigation();
  const { hospitalName, surgeryName, showRatingButton, surgeryPrice, pillText, reviewCount, rating, surgeryDescriptionQuestion, surgeryDescription, showMedia, doctorData, onRefresh } = props;
  const [isPriceModalVisible, setIsPriceModalVisible] = useState(false);
  const [isDescriptionModalVisible, setIsDescriptionModalVisible] = useState(false);
  const [isMediaModalVisible, setIsMediaModalVisible] = useState(false);
  const [isRemoveModalVisible, setIsRemoveModalVisible] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const [localPrice, setLocalPrice] = useState(surgeryPrice);
  const [localDescription, setLocalDescription] = useState({
    title: props.surgeryDescriptionQuestion ?? 'Description',
    description: props.surgeryDescription ?? ''
  });

  const handleRefresh = React.useCallback(async () => {
    setRefreshing(true);
    try {
      await onRefresh?.();
    } catch (error) {
      console.error('Refresh failed:', error);
    } finally {
      setRefreshing(false);
    }
  }, [onRefresh]);

  const handleSavePrice = (min: number | null, max: number | null) => {
    setLocalPrice({ minPrice: min, maxPrice: max });
  };

  const handleSaveDescription = (title: string, description: string) => {
    setLocalDescription({ title, description });
  };

  const getPriceRangeText = () => {
    const formatPrice = (price: number | null) => {
      if (price === null) {return ''}
      const formatted = price.toLocaleString('en-IN');
      return formatted;
    };

    if (localPrice.minPrice === null && localPrice.maxPrice === null) {
      return 'Add price range';
    }
    if (localPrice.minPrice === null) {
      return `Up to ₹${formatPrice(localPrice.maxPrice)}`;
    }
    if (localPrice.maxPrice === null) {
      return `From ₹${formatPrice(localPrice.minPrice)}`;
    }
    return `₹${formatPrice(localPrice.minPrice)} - ₹${formatPrice(localPrice.maxPrice)}`;
  };

  return (
    <ScrollView 
      style={styles.container}
      refreshControl={
        <RefreshControl
          refreshing={refreshing}
          onRefresh={handleRefresh}
          colors={['#1890FF']} // Android
          tintColor="#1890FF" // iOS
        />
      }
    >
        <View style={styles.headerContainer}>
            <Header
                onBackPress={() => {}}
                showBackIcon={true}
                title={surgeryName ?? ''}
                variant="Screen Header"
            />
        </View>
        <View>
            <Image 
                source={{uri: 'https://rukminim3.flixcart.com/image/720/864/k8q8nm80/poster/q/p/h/medium-animated-car-cartoon-poster-decorative-poster-poster-for-original-imafqzdcxa5pwgny.jpeg?q=60&crop=false'}}
                style={styles.image}
            />
            <View style={styles.pill}>
                <TransparentPill
                    leftIcon={true}
                    onPress={() => {setIsMediaModalVisible(true)}}
                    text={pillText}
                />
            </View>
        </View>
        <View style={styles.infoContainer}>
            <Button
                text= {`👍🏼 ${rating}%   ${reviewCount} patient stories`}
                style={styles.btn}
                size="Small"
            />
            <View style={styles.priceContainer}>
                <TouchableOpacity style={styles.flxItem} onPress={() => {setIsPriceModalVisible(true)}}>
                    <Text style={styles.priceHeaderText}>Price Range</Text>
                    <Image style={styles.chevron} source={{uri: 'https://rukminim3.flixcart.com/image/720/864/k8q8nm80/poster/q/p/h/medium-animated-car-cartoon-poster-decorative-poster-poster-for-original-imafqzdcxa5pwgny.jpeg?q=60&crop=false'}}></Image>
                </TouchableOpacity>
                <BottomSheet
                    visible={isPriceModalVisible}
                    onClose={()=>{setIsPriceModalVisible(false)}}
                    title='Price range'
                >
                    <ModalChildrenPrice onSave={handleSavePrice} onClose={() => setIsPriceModalVisible(false)} />
                </BottomSheet>
                <Text style={styles.priceSubText}>{getPriceRangeText()}</Text>
            </View>
            <View style={styles.questionContainer}>
                <TouchableOpacity onPress={()=>{setIsDescriptionModalVisible(true)}} style={styles.flxItem}>
                    <Text style={styles.priceHeaderText}>{localDescription.title ?? 'Description'}</Text>
                    <Image style={styles.chevron} source={{uri: 'https://rukminim3.flixcart.com/image/720/864/k8q8nm80/poster/q/p/h/medium-animated-car-cartoon-poster-decorative-poster-poster-for-original-imafqzdcxa5pwgny.jpeg?q=60&crop=false'}}></Image>
                </TouchableOpacity>
                <BottomSheet
                    visible={isDescriptionModalVisible}
                    onClose={()=>{setIsDescriptionModalVisible(false)}}
                    title='Add surgery/treatment description'
                >
                    <ModalChildrenDescription 
                        onSave={handleSaveDescription} 
                        onClose={() => setIsDescriptionModalVisible(false)} 
                    />
                </BottomSheet>
                    <Text style={styles.questionSubText}>
                        {localDescription.description || 'Add description'}
                    </Text>
            </View>
        </View>
        <View style={styles.mediaContainer}>
            {/* this is for the case when there are no photos and videos */}
            <View style={styles.mediaHeader}>
                <Text style={styles.photoText}>Photos and Videos</Text>
                <Text style={styles.photoSubText}>No Photos and Videos</Text>
            </View>
            {!showMedia && (
                <AddLogo
                    onPress={()=>{setIsMediaModalVisible(true)}}
                    borderRadius={16}
                    containerWidth="70%"
                    verticalAlignment="Center"
                    subtitle=''
                    title=''
                />
            )}
            <BottomSheet
                visible={isMediaModalVisible}
                onClose={()=>{setIsMediaModalVisible(false)}}
                title='Add photos and videos'
            >
                <ModalChildrenMedia />
            </BottomSheet>
        </View>
        <View style={styles.doctorContainer}>
            <View style={styles.mediaHeader}>
                <Text style={styles.photoText}>Doctors</Text>
                <Text style={styles.photoSubText}>
                    {doctorData?.length === 0 ? 'No' : doctorData?.length} Doctors
                </Text>
            </View>
            {doctorData?.length === 0 && (
                <>
                    <View style={styles.alertContainer}>
                        <Alert
                            description="Add doctors who do this surgery/treatment"
                            label="Label"
                            leftIcon
                            leftIconType="Info"
                            priority="Secondary"
                            state="Accent"
                            title=""
                        />
                    </View>
                </>
            )}
            {doctorData?.length > 0 && doctorData?.map((doctor, index) => (
                <DoctorItemGeneral
                    key={index}
                    bookBadgeProps={{
                        label: 'Book',
                        leftIcon: false,
                        showBorder: true,
                        size: 'Small',
                        state: 'Default',
                        type: 'Secondary'
                    }}
                    city="Bengaluru"
                    councilName="Tamil Nadu Medical Council"
                    doctorName={doctor?.name ?? ''}
                    experience={doctor?.experience ?? 0}
                    fees={doctor?.fee}
                    imageUrl="https://randomuser.me/api/portraits/women/44.jpg"
                    itemType="General"
                    rating={0.86}
                    registrationNumber="TN/12345/2020"
                    specialities={[doctor?.post ?? '']}
                    status="NONE"
                    statusBadgeProps={{
                        isUppercase: true,
                        label: 'LIVE',
                        labelType: 'Text',
                        numberLabel: 100,
                        showImage: false,
                        state: 'Success',
                        type: 'Secondary'
                    }}
                    storiesCount={doctor?.stories}
                    videoConsultBadgeProps={{
                        label: 'Video Consult',
                        leftIcon: false,
                        showBorder: true,
                        size: 'Small',
                        state: 'Default',
                        type: 'Secondary'
                    }}
                />
            ))}

            <Button
                style={styles.docBtn}
                text={doctorData?.length === 0 ? "Add doctors" : "View all doctors"}
                btnStyle="Outline"
                size="Small"
                type="Neutral"
                onPress={() => {navigation.navigate('DoctorManagementView' as never)}}
            />
        </View>
        <Button
            style={styles.removeBtn}
            text="Remove surgery/treatment"
            btnStyle="Outline"
            size="Large"
            type="Warning"
            onPress={() => {setIsRemoveModalVisible(true)}}
        />
        <RemoveModal
            isRemoveModalVisible={isRemoveModalVisible}
            onModalClose={() => setIsRemoveModalVisible(false)}
            animationStyle="slide"
        >
            <View style={styles.bottomSheetOverlay}>
          <View style={styles.bottomSheet}>
            <View style={styles.modalContent}>
                <Image source={{uri: 'https://rukminim3.flixcart.com/image/720/864/k8q8nm80/poster/q/p/h/medium-animated-car-cartoon-poster-decorative-poster-poster-for-original-imafqzdcxa5pwgny.jpeg?q=60&crop=false'}} style={styles.modalImage}></Image>
                <Text style={styles.modalText}>{surgeryName} will be removed from {hospitalName}</Text>
            </View>
            <Button
              text="Remove"
              btnStyle="Fill"
              type="Warning"
              size="Large"
              onPress={() => {setIsRemoveModalVisible(false)}}
              style={{ marginTop: 16 }}
            />
            <Button
              text="Cancel"
              btnStyle="Outline"
              type="Neutral"
              size="Large"
              onPress={() => {
                setIsRemoveModalVisible(false);
              }}
              style={{ marginTop: 16 }}
            />
          </View>
        </View>
        </RemoveModal>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 25,
        // marginBottom: 15
    },
    headerContainer: {
      height: 60,
      backgroundColor: '#fff',
      paddingTop: 25,
      paddingBottom: 12,
      paddingRight: 16,
      paddingLeft: 16,
      marginBottom: 10
    },
    image: {
        height: 180,
        width: '93%',
        borderRadius: 20,
        alignSelf: 'center',
        marginTop: 5,
        marginBottom: 5
    },
    pill: {
        position: 'absolute',
        top: 140,
        left: 220
    },
    infoContainer: {
        backgroundColor: '#fff',
        height: 'auto',
        width: '94%',
        alignSelf: 'center',
        borderRadius: 20,
        marginTop: 10,
        paddingHorizontal: 4
    },
    btn: {
        marginTop: 10,
        width: '93%',
        alignSelf: 'center'
    },
    priceContainer: {
        width: '94%',
        alignSelf: 'center',
        marginTop: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#F0F0F5',
        paddingBottom: 20,
        paddingHorizontal: 8
    },
    flxItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%'
    },
    chevron: {
        height: 20,
        width: 20
    },
    priceHeaderText: {
        fontFamily: 'Lato',
        fontWeight: 600,
        fontSize: 17,
        lineHeight: 20,
        letterSpacing: -0.18,
        flex: 1,
        marginRight: 8
    },
    priceSubText: {
        fontFamily: 'Lato',
        fontWeight: 500,
        fontSize: 13,
        lineHeight: 16,
        letterSpacing: -0.14,
        marginTop: 8,
        flexWrap: 'wrap',
        flex: 1,
        width: '100%',
        paddingRight: 8
    },
    questionContainer: {
        width: '91%',
        alignSelf: 'center',
        marginTop: 20,
    },
    questionSubText: {
        width: 306,
        fontFamily: 'Lato',
        fontWeight: 400,
        fontSize: 13,
        marginTop: 8,
        lineHeight: 20,
        marginBottom: 15
    },
    mediaContainer: {
        height: 221,
        backgroundColor: '#fff',
        width: '93%',
        alignSelf: 'center',
        borderRadius: 20,
        marginTop: 15,
    },
    mediaHeader: {
        width: '91%',
        alignSelf: 'center',
        marginTop: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#F0F0F5',
        paddingBottom: 20
    },
    photoText: {
        fontWeight: 700,
        fontFamily: 'Lato',
        fontSize: 20,
        lineHeight: 24,
        letterSpacing: -0.2,
        marginBottom: 3
    },
    photoSubText: {
        fontFamily: 'Lato',
        fontWeight: 500,
        fontSize: 12,
        lineHeight: 14,
        letterSpacing: -0.12
    },
    doctorContainer: {
        width: '93%',
        alignSelf: 'center',
        borderRadius: 20,
        marginTop: 15,
        backgroundColor: '#fff',
        paddingBottom: 15,
    },
    alertContainer: {
        width: '93%',
        alignSelf: 'center',
        marginTop: 10
    },
    docBtn: {
        marginTop: 10,
        width: '93%',
        alignSelf: 'center',
        color: '#fff'
    },
    inputContainer: {
        width: '93%',
        alignSelf: 'center'
    },
    inputBtn: {
        width: '93%',
        alignSelf: 'center',
        marginTop: 20,
        marginBottom: 20
    },
    errorText: {
        color: 'red',
        fontSize: 12,
        marginBottom: 10    
    },
    mediaModalContainer: {
        width: '91%',
        alignSelf: 'center',
        borderRadius: 20,
        marginTop: 15,
        marginBottom: 5,
        borderBottomWidth: 1,
        borderBottomColor: '#F0F0F5',
        paddingBottom: 20   
    },
    removeBtn: {
        marginTop: 10,
        width: '93%',
        alignSelf: 'center',
        marginBottom: 20
    },
    bottomSheetOverlay: {
        flex: 1,
        justifyContent: 'flex-end',
        backgroundColor: 'rgba(0,0,0,0.5)',
      },
      bottomSheet: {
        backgroundColor: '#fff',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        padding: 24,
        height: 'auto',
        width: '100%',
        shadowColor: '#000',
      },
      modalContent: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 10,
        marginTop: 15,
        width: '100%',
        alignSelf: 'center',
        paddingHorizontal: 20
      },
      modalImage: {
        width: 40,
        height: 40,
        borderRadius: 10,
        marginBottom: 12,
        },
      modalText: {
        fontFamily: 'Lato',
        fontWeight: 700,
        fontSize: 15,
        lineHeight: 18,
      }
  });

export default SurgeryDetailsPage
