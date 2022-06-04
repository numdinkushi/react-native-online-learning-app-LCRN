import React, {useState} from 'react';
import {View, Text, Image, TouchableOpacity, ScrollView} from 'react-native';
import Animated, {
  interpolate,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  withDelay,
  withTiming,
} from 'react-native-reanimated';

import {TextButton, LineDivider} from '../components';
import {FONTS, COLORS, SIZES, constants, icons} from '../constants';

const ClassTypeOptions = ({containerStyle, classType, isSelected, onPress}) => {
  return (
    <TouchableOpacity
      style={{
        flex: 1,
        height: 100,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: SIZES.radius,
        borderRadius: SIZES.radius,
        backgroundColor: isSelected ? COLORS.primary3 : COLORS.additionalColor9,
        ...containerStyle,
      }}
      onPress={onPress}>
      <Image
        source={classType.icon}
        resizeMode="contain"
        style={{
          width: 40,
          height: 40,
          tintColor: isSelected ? COLORS.white : COLORS.gray80,
        }}
      />
      <Text
        style={{
          marginTop: SIZES.base,
          color: isSelected ? COLORS.white : COLORS.gray80,
          ...FONTS.h3,
        }}>
        {classType.label}
      </Text>
    </TouchableOpacity>
  );
};

const ClassLevelOption = ({
  containerStyle,
  classLevel,
  isLastItem,
  isSelected,
  onPress,
}) => {
  return (
    <>
      <TouchableOpacity
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          height: 50,
          ...containerStyle,
        }}
        onPress={onPress}>
        <Text
          style={{
            flex: 1,
            ...FONTS.body3,
          }}>
          {classLevel.label}
        </Text>
        <Image
          source={isSelected ? icons.checkbox_on : icons.checkbox_off}
          resizeMode="contain"
          style={{
            width: 20,
            height: 20,
          }}
        />
      </TouchableOpacity>
      {!isLastItem && (
        <LineDivider
          lineStyle={{
            height: 1,
          }}
        />
      )}
    </>
  );
};

const FilterModal = ({FilterModalSharedValue1, FilterModalSharedValue2}) => {
  const [selectedClassType, setSelectedClassType] = useState('');
  const [selectedClassLevel, setSelectedClassLevel] = useState('');
  const [selectedCreatedWithin, setSelectedCreatedWithin] = useState('');

  const filterModalContainerAnimatedStyle = useAnimatedStyle(() => {
    return {
      opacity: interpolate(
        FilterModalSharedValue1.value,
        [SIZES.height, 0],
        [0, 1],
      ),
      transform: [{translateY: FilterModalSharedValue2.value}],
    };
  });
  const filterModalBgAnimatedStyle = useAnimatedStyle(() => {
    return {
      opacity: interpolate(
        FilterModalSharedValue2.value,
        [SIZES.height, 0],
        [0, 1],
      ),
      transform: [{translateY: FilterModalSharedValue2.value}],
    };
  });

  const filterModalContentAnimatedStyle = useAnimatedStyle(() => {
    return {
      opacity: interpolate(
        FilterModalSharedValue2.value,
        [SIZES.height, 0],
        [0, 1],
      ),
      transform: [{translateY: FilterModalSharedValue2.value}],
    };
  });
  return (
    //   Main Container
    <Animated.View
      style={[
        {
          position: 'absolute',
          bottom: 0,
          height: SIZES.height,
          width: SIZES.width,
        },
        filterModalContainerAnimatedStyle,
      ]}>
      {/* Background Container */}
      <Animated.View
        style={[
          {
            flex: 1,
            height: SIZES.height,
            width: SIZES.width,
            backgroundColor: COLORS.transparentBlack7,
          },
          filterModalBgAnimatedStyle,
        ]}>
        {/* Content Container */}
        <Animated.View
          style={[
            {
              position: 'absolute',
              bottom: 0,
              height: SIZES.height * 0.85,
              width: SIZES.width,
              borderTopLeftRadius: 30,
              borderTopRightRadius: 30,
              backgroundColor: COLORS.white,
            },
            filterModalContentAnimatedStyle,
          ]}>
          {/* Header */}
          <View
            style={{
              marginTop: SIZES.padding,
              flexDirection: 'row',
              paddingHorizontal: SIZES.padding,
            }}>
            <View style={{width: 60}} />
            <Text
              style={{
                flex: 1,
                textAlign: 'center',
                ...FONTS.h1,
                color: COLORS.black,
              }}>
              Filter
            </Text>
            <TextButton
              label="Cancel"
              contentContainerStyle={{
                width: 60,
                backgroundColor: null,
              }}
              labelStyle={{
                color: COLORS.black,
              }}
              onPress={() => {
                FilterModalSharedValue2.value = withTiming(SIZES.height, {
                  duration: 500,
                });
                FilterModalSharedValue1.value = withDelay(
                  500,
                  withTiming(SIZES.height, {duration: 100}),
                );
              }}
            />
          </View>
          {/* Content */}
          <ScrollView
            contentContainerStyle={{
              paddingHorizontal: SIZES.padding,
              paddingBottom: 50,
            }}>
            {/* Class Type */}
            <View
              style={{
                marginTop: SIZES.radius,
              }}>
              <Text
                style={{
                  ...FONTS.h3,
                }}>
                Class Type
              </Text>

              <View
                style={{
                  flexDirection: 'row',
                  marginTop: SIZES.radius,
                }}>
                {constants.class_types.map((item, index) => {
                  return (
                    <ClassTypeOptions
                      key={`Classtype-${index}`}
                      isSelected={selectedClassType == item?.id}
                      classType={item}
                      containerStyle={{
                        marginLeft: index == 0 ? 0 : SIZES.base,
                      }}
                      onPress={() => {
                        setSelectedClassType(item.id);
                      }}
                    />
                  );
                })}
              </View>
            </View>
            {/* Class Level */}
            <View
              style={{
                marginTop: SIZES.padding,
              }}>
              <Text
                style={{
                  ...FONTS.h3,
                }}>
                Class Level
              </Text>
              <View>
                {constants.class_levels.map((item, index) => {
                  return (
                    <ClassLevelOption
                      key={`classLevel-${index}`}
                      classLevel={item}
                      isLastItem={index == constants.class_levels.length - 1}
                      isSelected={selectedClassLevel == item.id}
                      onPress={() => {
                        setSelectedClassLevel(item.id);
                      }}
                    />
                  );
                })}
              </View>
            </View>

            {/* Created within */}
            <View
              style={{
                marginTop: SIZES.radius,
              }}>
              <Text
                style={{
                  ...FONTS.h3,
                }}>
                Created Witin
              </Text>
              <View
                style={{
                  flex: 1,
                  flexDirection: 'row',
                  flexWrap: 'wrap',
                }}>
                {constants.created_within.map((item, index) => {
                  return (
                    <TextButton
                      key={`createdWithin-${index}`}
                      label={item?.label}
                      contentContainerStyle={{
                        height: 45,
                        paddingHorizontal: SIZES.radius,
                        marginLeft: index % 3 == 0 ? 0 : SIZES.radius,
                        marginop: SIZES.radius,
                        borderWidth: 1,
                        borderRadius: SIZES.radius,
                        borderColor: COLORS.gray20,
                        backgroundColor:
                          item.id == selectedCreatedWithin
                            ? COLORS.primary3
                            : null,
                      }}
                      labelStyle={{
                          color: item?.id == selectedCreatedWithin ? COLORS.white : COLORS.black,
                          ...FONTS.body3
                      }}
                      onPress={() =>{
                          setSelectedCreatedWithin(item.id)
                      } }
                    />
                  );
                })}
              </View>
            </View>
            {/* Class Lenght */}
            <View
                style={{
                  marginTop:SIZES.padding
                }}
            >
                <Text
                    style={{
                        ...FONTS.h3
                    }}
                >
                    Created Within
                </Text>
            </View>

          </ScrollView>
        </Animated.View>
      </Animated.View>
    </Animated.View>
  );
};

export default FilterModal;
