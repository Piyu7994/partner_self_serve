import { Image, ScrollView, Text, View } from "react-native";
import { EstProfileCardProps } from "./EstProfileCardProps";
import { EPCStyle } from "./EstProfileStyle";
import timingIcon from '../../assets/icons/ic_timing.png'
import locationIcon from '../../assets/icons/ic_location.png'
import logoImg from '../../assets/images/img_logo.png'
import { colors } from "../../theme/color";

export const HospitalProfileCard: React.FC<EstProfileCardProps> = ({ data }) => {
    return (
      <View style={EPCStyle.card}>
        {/* Header */}
        <View style={EPCStyle.headerRow}>
            <View style={[EPCStyle.logoContainer, { borderColor: colors.border.primary }]}>
                <Image source={logoImg} style={EPCStyle.logo} />
            </View>
          <View style={{ flex: 1 }}>
            <Text style={EPCStyle.name}>{data.name}</Text>
            <Text style={EPCStyle.speciality}>{data.speciality}</Text>
          </View>
        </View>
  
        {/* Departments */}
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={EPCStyle.departmentsRow}>
          {data.departments.map((dept, idx) => (
            <View key={dept} style={EPCStyle.departmentPill}>
              <Text style={EPCStyle.departmentText}>{dept}</Text>
            </View>
          ))}
        </ScrollView>
  
        {/* Timings & Location */}
        <View style={EPCStyle.infoRow}>
          <Image style={EPCStyle.infoIcon} source={timingIcon} />
          <Text style={EPCStyle.infoText}>
            Open Today <Text style={EPCStyle.bold}>{data.openTime} - {data.closeTime}</Text>
          </Text>
        </View>
        <View style={EPCStyle.infoRow}>
          <Image style={EPCStyle.infoIcon} source={locationIcon} />
          <Text style={EPCStyle.infoText}>
            Location <Text style={EPCStyle.bold}>{data.location}</Text>
          </Text>
        </View>
  
        {/* Profile Completion */}
        <View style={EPCStyle.profileCompletionBox}>
          <View style={EPCStyle.profileCircle}>
            <Text style={EPCStyle.profilePercent}>{data.profileCompletion}%</Text>
          </View>
          <View style={{ flex: 1 }}>
            <Text style={EPCStyle.profileTitle}>Profile completion</Text>
            <Text style={EPCStyle.profileMessage}>{data.profileCompletionMessage}</Text>
          </View>
        </View>
      </View>
    );
  };