import React from 'react';
import { Image, StyleSheet, View, Text } from 'react-native';
// import Video from 'react-native-video';

export type MediaPreviewProps = {
  uri: string;
  isVideo?: boolean;
  duration?: string;
};

export const MediaPreview: React.FC<MediaPreviewProps> = ({ uri, isVideo, duration }) => {
  return (
    <View style={styles.mediaContainer}>
      {/* {isVideo ? (
        <Video
          source={{ uri }}
          style={styles.media}
          resizeMode="cover"
          controls={true}
        />
      ) : ( */}
        <Image
          source={{ uri }}
          style={styles.media}
          resizeMode="cover"
        />
      {/* )} */}
      {isVideo && duration && (
        <View style={styles.durationOverlay}>
          <Text style={styles.durationText}>{duration}</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  mediaContainer: {
    width: '100%',
    height: '40%',
    borderRadius: 16,
    overflow: 'hidden',
    marginBottom: 16,
    backgroundColor: '#000',
  },
  media: {
    width: '100%',
    height: '100%',
  },
  durationOverlay: {
    position: 'absolute',
    bottom: 8,
    right: 8,
    backgroundColor: 'rgba(0,0,0,0.6)',
    borderRadius: 8,
    paddingHorizontal: 6,
    paddingVertical: 2,
  },
  durationText: {
    color: '#fff',
    fontSize: 12,
  },
});
