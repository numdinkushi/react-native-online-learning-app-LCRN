import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  Animated,
  Keyboard,
} from 'react-native';
import {IconButton, LineDivider} from '../../components';
import {
  FONTS,
  COLORS,
  SIZES,
  icons,
  constants,
  dummyData,
} from '../../constants';

const CourseDetails = ({navigation, route}) => {
  const {selectedCourse} = route.params;

  function renderVideoSection() {
    return (
      <View
        style={{
          height: SIZES.height > 200 ? 220 : 200,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: COLORS.gray90,
        }}>
        {/* Thumbnail */}
        <ImageBackground
          source={selectedCourse?.thumbnail}
          style={{
            width: '100%',
            height: '100%',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          {/* Play Button */}
          <IconButton
            icon={icons.play}
            iconStyle={{
              width: 25,
              height: 25,
              tintColor: COLORS.white,
            }}
            containerStyle={{
              width: 55,
              height: 55,
              alignItems: 'center',
              justifyContent: 'center',
              marginTop: SIZES.padding,
              borderRadius: 30,
              backgroundColor: COLORS.primary,
            }}
          />
        </ImageBackground>
      </View>
    );
  }

  function renderHeaderComponents() {
    return (
      <>
        {/* Back Button */}
        <View
          style={{
            flex: 1,
          }}>
          <IconButton
            icon={icons.back}
            iconStyle={{
              width: 25,
              height: 25,
              tintColor: COLORS.black,
            }}
            containerStyle={{
              width: 40,
              height: 40,
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 20,
              backgroundColor: COLORS.white,
            }}
            onPress={() => navigation.goBack()}
          />
        </View>
        {/* Share and Favourite */}
        <View
          style={{
            flexDirection: 'row',
          }}>
          <IconButton
            icon={icons.media}
            iconStyle={{
              tintColor: COLORS.white,
            }}
            containerStyle={{
              width: 50,
              height: 50,
              alignItems: 'center',
              justifyContent: 'center',
            }}
          />
                   <IconButton
            icon={icons.favourite_outline}
            iconStyle={{
              tintColor: COLORS.white,
            }}
            containerStyle={{
              width: 50,
              height: 50,
              alignItems: 'center',
              justifyContent: 'center',
            }}
          />
        </View>
      </>
    );
  }

  function renderHeader() {
    return (
      <View
        style={{
          position: 'absolute',
          top: SIZES.height > 800 ? 40 : 20,
          left: 0,
          right: 0,
          flexDirection: 'row',
          paddingHorizontal: SIZES.padding,
          zIndex: 1,
        }}>
        {renderHeaderComponents()}
      </View>
    );
  }
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: COLORS.white,
      }}>
      {/* Header Bar */}
      {renderHeader()}
      {/* Video */}
      {renderVideoSection()}
    </View>
  );
};

export default CourseDetails;
