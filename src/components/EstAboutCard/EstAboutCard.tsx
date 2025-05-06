import { Image, Text, TouchableOpacity, View } from "react-native";
import { EACStyle } from "./EstAboutCardStyle";
import { EstAboutCardProps } from "./EstAboutCardProps";
import locImg from '../../assets/images/img_loc.png'

const EstAboutCardComponent: React.FC<EstAboutCardProps> = ({ 
    data, onUpdatePress
}) => {
    return (
      <View style={EACStyle.card}>
        {/* Header */}
        <Text style={EACStyle.title}>About {data.hospitalName}</Text>
        <Text style={EACStyle.subtitle}>Established in {data.establishedYear}</Text>
        <View style={EACStyle.divider} />
  
        {/* Address & Map */}
        <View style={EACStyle.row}>
          <View style={{ flex: 1 }}>
            <Text style={EACStyle.sectionTitle}>Address</Text>
            <Text style={EACStyle.sectionText}>{data.address}</Text>
          </View>
          <Image source={ locImg } style={EACStyle.mapImage} />
        </View>
        <View style={EACStyle.divider} />
  
        {/* Timings */}
        <Text style={[EACStyle.sectionTitle, {marginBottom: 12}]}>Timings</Text>
        {data.timings.map((timing, idx) => (
          <View key={idx} style={EACStyle.timingRow}>
            <Text style={EACStyle.timingDays}>{timing.days}</Text>
            <Text style={EACStyle.timingSlots}>{timing.slots.join(' | ')}</Text>
          </View>
        ))}
        <View style={[EACStyle.divider, {marginTop: 0, marginBottom: 12}]} />
  
        {/* Modes of payment */}
        <Text style={EACStyle.sectionTitle}>Modes of payment</Text>
        <Text style={EACStyle.sectionText}>{data.paymentModes.join(' | ')}</Text>
        <View style={EACStyle.divider} />
  
        {/* Registration fee */}
        <Text style={EACStyle.sectionTitle}>Registration fee</Text>
        <Text style={EACStyle.sectionText}>{data.registrationFee}</Text>
        <View style={EACStyle.divider} />
  
        {/* Insurance & Corporate Tie-ups */}
        <Text style={EACStyle.sectionTitle}>Insurance & Corporate Tie-ups</Text>
        <Text style={EACStyle.sectionText}>{data.insuranceTieUps}</Text>
        <View style={EACStyle.divider} />
  
        {/* Description */}
        <Text style={EACStyle.sectionTitle}>Description</Text>
        <Text style={EACStyle.sectionText}>{data.description}</Text>
        <View style={EACStyle.divider} />
  
        {/* Ownership Verified */}
        <Text style={EACStyle.sectionTitle}>Ownership Verified</Text>
        <Text style={EACStyle.sectionText}>{data.ownershipMessage}</Text>
  
        {/* Profile Completion */}
        <View style={EACStyle.profileCompletionBox}>
          <View style={EACStyle.profileCircle}>
            <Text style={EACStyle.profilePercent}>{data.profileCompletion}%</Text>
          </View>
          <View style={{ flex: 1 }}>
            <Text style={EACStyle.profileTitle}>{data.profileCompletionTitle}</Text>
            <Text style={EACStyle.profileMessage}>{data.profileCompletionMessage}</Text>
          </View>
        </View>
  
        {/* Update Button */}
        <TouchableOpacity style={EACStyle.updateButton} onPress={onUpdatePress}>
          <Text style={EACStyle.updateButtonText}>Update about hospital</Text>
        </TouchableOpacity>
      </View>
    );
  };

  export default EstAboutCardComponent;