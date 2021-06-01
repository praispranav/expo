import React, { Component } from "react";
import { Alert, StyleSheet, Text, View, TouchableOpacity } from "react-native";

import { Agenda,Timeline } from "react-native-calendars";
import Wrapper from "../components/Wrapper";
import GradientNavigationBar from "../elements/GradientNavigationBar";
import colors from "../config/colors";
import { deviceWidth, deviceHeight, NAV_HEIGHT } from "../config/CommonStyles";

export default class AgendaScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: {
        "2021-05-23": [
          {
            title: "Lorem Ipsum",
            tasks: [
              {
                time: "2 pm",
            
                task: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.",
              },
              {
                time: "4 pm",
                task: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.",
              },
            ],
          },
        ],
        "2021-05-24": [
          {
            title: "Lorem Ipsum",
            tasks: [
              {
                time: "5 am",
                task: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.",
              },
            ],
          },
        ],
        "2021-05-25": [
          {
            title: "Lorem Ipsum",
            tasks: [
              {
                time: "1 am",
                task: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
              },
              {
                time: "2 am",
                task: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard",
              },
              {
                time: "3 am",
                task: "Lorem Ipsum is simply dummy text of the printing",
              },
              {
                time: "4 am",
                task: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.",
              },
            ],
          },
        ],
        "2021-05-26": [
          {
            title: "Lorem Ipsum",
            tasks: [
              {
                time: "8 pm",
                task: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.",
              },
            ],
          },
        ],
        "2021-05-27": [
          {
            title: "Lorem Ipsum",
            tasks: [
              {
                time: "2 pm",
                task: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.",
              },
              {
                time: "4 pm",
                task: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.",
              },
            ],
          },
        ],
        "2021-05-28": [],
        "2021-05-29": [
          {
            title: "Lorem Ipsum",
            tasks: [
              {
                time: "1 am",
                task: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
              },
              {
                time: "2 pm",
                task: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard",
              },
              {
                time: "4 pm",
                task: "Lorem Ipsum is simply dummy text of the printing",
              },
              {
                time: "7 pm",
                task: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.",
              },
            ],
          },
        ],
        "2021-05-30": [
          {
            title: "Lorem Ipsum",
            tasks: [
              {
                time: "12 pm",
                task: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.",
              },
            ],
          },
        ],
        "2021-05-31": [
          {
            title: "Lorem Ipsum",
        
            tasks: [
              {
                time: "10:00AM - 10:45AM",
              
                task: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.",
              },
              {
              
                time: "03:00PM - 03:45PM",
                task: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.",
              },
            ],
          },
        ],
        "2021-06-01": [
          {
            title: "Lorem Ipsum",
            tasks: [
              {
                time: "10 am",
                task: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.",
              },
            ],
          },
        ],
        "2021-06-02": [
          {
            title: "Lorem Ipsum",
            tasks: [
              {
                time: "11 am",
                task: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.",
              },
            ],
          },
        ],
        "2021-06-03": [
          {
            title: "Lorem Ipsum",
            tasks: [
              {
                time: "12 am",
                task: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.",
              },
            ],
          },
        ],
      },
    };
  }

  render() {
    return (
      <Wrapper>
        <GradientNavigationBar
          navigation={this.props.navigation}
          titleText="Calendar"
        />
        <Agenda
          items={this.state.items}
          loadItemsForMonth={this.loadItems.bind(this)}
          selected={new Date()}
          renderItem={this.renderItem.bind(this)}
          renderEmptyDate={this.renderEmptyDate.bind(this)}
          rowHasChanged={this.rowHasChanged.bind(this)}
          theme={{
            "stylesheet.calendar.header": {
              dayTextAtIndex0: {
                color: "red",
              },
              dayTextAtIndex6: {
                color: "blue",
              },
              headerContainer: {
                marginTop: -NAV_HEIGHT,
                borderTopWidth: 1,
                borderBottomWidth: 1,
                alignItems: "center",
                justifyContent: "center",
              },
            },
            "stylesheet.day.basic": {
              dayTextAtIndex0: {
                color: "red",
              },
              dayTextAtIndex6: {
                color: "blue",
              },
            },
            calendarBackground: "white",
            agendaKnobColor: colors.sky,
          }}
          showWeekNumbers={true}
          style={{ marginTop: NAV_HEIGHT }}
        />
      </Wrapper>
    );
  }

  loadItems(day) {
    setTimeout(() => {
      for (let i = -15; i < 85; i++) {
        const time = day.timestamp + i * 24 * 60 * 60 * 1000;
        const strTime = this.timeToString(time);
        if (!this.state.items[strTime]) {
          this.state.items[strTime] = [];
        }
      }
      const newItems = {};
      Object.keys(this.state.items).forEach((key) => {
        newItems[key] = this.state.items[key];
      });
      this.setState({
        items: newItems,
      });
    }, 1000);
  }

  renderItem(item) {
    return (
      <View style={styles.item}>
        <Text style={styles.title}>{item.title}</Text>
        {item.tasks.map((singleTask, index) => (
          <TouchableOpacity
            key={index}
            style={styles.singleTaskContainer}
            onPress={() => Alert.alert(singleTask.time, singleTask.task)}
          >
            <Text style={styles.singleTaskTime}>{singleTask.time} :</Text>
            <Text style={styles.singleTaskText}>{singleTask.task}</Text>
          </TouchableOpacity>
        ))}
      </View>
    );
  }

  renderEmptyDate() {
    return (
      <View style={styles.emptyDate}>
        <Text></Text>
      </View>
    );
  }

  rowHasChanged(r1, r2) {
    return r1.task !== r2.task;
  }

  timeToString(time) {
    const date = new Date(time);
    return date.toISOString().split("T")[0];
  }
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: "white",
    flex: 1,
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
    marginTop: 17,
    minHeight: 40,
    borderWidth: 1,
    borderColor: colors.sky,
  },
  emptyDate: {
    height: 15,
    flex: 1,
    paddingTop: 30,
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
    marginBottom: deviceHeight * 0.01,
  },
  singleTaskContainer: {
    alignItems: "flex-start",
    flexDirection: "row",
    borderTopWidth: 1,
    borderColor: colors.GREY.Smoke_Grey,
    paddingVertical: deviceHeight * 0.01,
  },
  singleTaskText: { flex: 1, marginLeft: deviceWidth * 0.01 },
  singleTaskTime: { fontWeight: "bold" },
});
