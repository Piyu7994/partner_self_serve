import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { GenericCard, GenericList, Alert as AlertComponent } from '@practo/self-serve';

export interface AddMediaProps {
    mediaTiles: React.ReactNode[];
    title: string;
    subtext: string;
    errorAlertTitle: string;
    errorAlertDescription: string;
    progressAlertTitle: string;
    progressAlertDescription: string;
    progressAlertShowLoader: boolean;
    progressAlertRightAction: boolean;
    progressAlertLoaderPercentage: number;
    onAddMediaPress: () => void;
}

export const AddMedia = ({
    mediaTiles,
    title,
    subtext,
    errorAlertTitle,
    errorAlertDescription,
    progressAlertTitle,
    progressAlertDescription,
    progressAlertShowLoader,
    progressAlertRightAction,
    progressAlertLoaderPercentage,
    onAddMediaPress,
}: AddMediaProps) => {
    return (
        <GenericCard
            headerProps={{
                title: title,
                subtext: subtext,
                showBackIcon: false,
            }}
            body={
                <View style={styles.container}>
                    <GenericList
                        data={mediaTiles}
                        layout='Horizontal'
                        style={styles.section}
                    />
                    <View style={styles.section}>
                        {
                            (mediaTiles.length === 4) ? (
                                <AlertComponent
                                    title={errorAlertTitle || ''}
                                    description={errorAlertDescription || ''}
                                    label="Label"
                                    rightAction={false}
                                    leftIcon
                                    leftIconType="Info"
                                    loaderPercentage={83}
                                    priority="Secondary"
                                    state="Error"
                                />

                            ) : (
                                <View style={styles.section}>
                                    <AlertComponent
                                        title={progressAlertTitle || ''}
                                        description={progressAlertDescription || ''}
                                        loaderPercentage={progressAlertLoaderPercentage || 0}
                                        priority={'Primary'}
                                        state={'Info'}
                                        showLoader={progressAlertShowLoader || false}
                                        rightAction={progressAlertRightAction || false}
                                    />
                                </View>
                            )
                        }
                    </View>
                </View>
            }
            buttonProps={
                {
                    text: 'Add Media',
                    btnStyle: 'Outline',
                    //size: 'Large',
                    onPress: onAddMediaPress,
                }
            }
        />
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        gap: 2,
    },
    section: {
        marginBottom: 12,
    },
    alertSection: {
        alignItems: 'center',
    },
});