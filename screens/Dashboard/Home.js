import React from 'react';
import {View, Text, ImageBackground, Image, ScrollView} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {
  constants,
  COLORS,
  FONTS,
  SIZES,
  icons,
  dummyData,
  images,
} from '../../constants';
import {IconButton, TextButton, VerticalCourseCard} from '../../components';
import { LineDivider } from '../../components';

const Section = ({containerStyle, children, title, onPress})=>{
    return (
        <View
            style={{
                ...containerStyle,
            }}
        >
            <View
                style={{
                    flexDirection:"row",
                    paddingHorizontal: SIZES.padding,
                }}
            >
                <Text
                    style={{
                        flex: 1,
                        ...FONTS.h2
                    }}
                >
                    {title}
                </Text>
                    <TextButton 
                        contentContainerStyle={{
                            width:80,
                            borderRadius:30,
                            backgroundColor:COLORS.primary
                        }}
                        label="See All"
                        onPress={onPress}
                    />
            </View>
        </View>
    )
}

const Home = () => {
  function renderHeader() {
    return (
      <View
        style={{
          flexDirection: 'row',
          marginTop: 40,
          marginBottom: 10,
          paddingHorizontal: SIZES.padding,
          alignItems: 'center',
        }}>
        {/* Greetings */}
        <View
          style={{
            flex: 1,
          }}>
          <Text style={{...FONTS.h2}}>Hello Kushi Numdin E.</Text>
          <Text
            style={{
              color: COLORS.gray50,
              ...FONTS.body3,
            }}>
            Monday, 16th May, 2022
          </Text>
        </View>
        {/* Notification */}
        <IconButton
          icon={icons.notification}
          iconStyle={{
            tintColor: COLORS.black,
          }}
        />
      </View>
    );
  }

  function renderStartLearning() {
    return (
      <ImageBackground
        source={images.featured_bg_image}
        style={{
          alignItems: 'flex-start',
          marginTop: SIZES.padding,
          marginHorizontal: SIZES.padding,
          padding: 15,
        }}
        imageStyle={{
          borderRadius: SIZES.radius,
        }}>
        {/* Info */}
        <View>
          <Text
            style={{
              color: COLORS.white,
              ...FONTS.body2,
            }}>
            HOW TO
          </Text>
          <Text
            style={{
              color: COLORS.white,
              ...FONTS.h2,
            }}>
            Make your brain more visible with our checklist
          </Text>
          <Text
            style={{
              marginTop: SIZES.radius,
              color: COLORS.white,
              ...FONTS.body4,
            }}>
            By Scot Harris
          </Text>
        </View>
        {/* Image section */}
        <Image
          source={images.start_learning}
          style={{
            width: '100%',
            height: 110,
            marginTop: SIZES.padding,
          }}
        />
        {/* Button  */}
        <TextButton
          label="Start Learning"
          contentContainerStyle={{
            height: 40,
            paddingHorizontal: SIZES.padding,
            borderRadius: 20,
            backgroundColor: COLORS.white,
          }}
          labelStyle={{
            color: COLORS.black,
          }}
        />
      </ImageBackground>
    );
  }
  function renderCourses() {
    return (
      <FlatList
        horizontal
        data={dummyData.courses_list_1}
        listKey="Courses"
        keyExtractor={item => `Courses-${item.id}`}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          marginTop: SIZES.padding,
        }}
        renderItem={({item, index}) => (
          <VerticalCourseCard
            containerStyle={{
              marginLeft: index == 0 ? SIZES.padding : SIZES.radius,
              marginRight:
                index == dummyData.courses_list_1.length - 1
                  ? SIZES.padding
                  : 0,
            }}
            course={item}
          />
        )}
      />
    );
  }
  function renderCategories(){
    return (
        <Section
        title="Categories"
        >
            <FlatList 
                horizontal
                data={dummyData.categories}
                listKey="Categories"
                keyExtractor={item => `Categories-${item.id}`}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{ 
                    marginTop: SIZES.radius
                }}
                renderItem={({item, index}) => {
                    
                }}
                />  

        </Section>
    )
  }
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: COLORS.white,
      }}>
      {/* Header */}
      {renderHeader()}

      {/* Content */}
      <ScrollView
        contentContainerStyle={{
          paddingBottom: 150,
        }}
        showsHorizontalScrollIndicator={false}>
        {/* Start Learning section */}
        {renderStartLearning()}

        {/* Courses Section */}
        {renderCourses()}

        <LineDivider
            lineStyle={{
                marginVertical:SIZES.padding
            }}
        />
        {/* Category Section */}
        {renderCategories()}
      </ScrollView>
    </View>
  );
};

export default Home;