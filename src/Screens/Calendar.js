// Package
import { useEffect, useState } from "react";

// Components
import { View, Text, ScrollView, RefreshControl, SafeAreaView } from "react-native";
import { Agenda } from "react-native-calendars";
import Loading from "../Components/Loading";

// Modules
import Events from "../Modules/Calendar/Events";

// Functions
import { GetCalendarData } from "../Functions/Calendar";

// Style
import { CalendarStyle } from "../Assets/Styles/Calendar";

const Calendar = () => {
  const [CalendarData, setCalendarData] = useState();
  const [refreshing, setRefreshing] = useState(false);
  const [loading, setLoading] = useState(true);
  const [userRole, setUserRole] = useState("");

  useEffect(() => {
    GetCalendarData(
      setCalendarData,
      setRefreshing,
      setLoading,
      false,
      setUserRole
    );
  }, []);

  return (
    <SafeAreaView style={CalendarStyle.wrapper}>
      {loading ? (
        <Loading variant="with-text" text="Fetching your schedules...." />
      ) : (
        <Agenda
          onRefresh={async () =>
            GetCalendarData(
              setCalendarData,
              setRefreshing,
              setLoading,
              true,
              setUserRole
            )
          }
          displayLoadingIndicator
          refreshing={refreshing}
          scrollEnabled={true}
          showScrollIndicator={true}
          pastScrollRange={2}
          futureScrollRange={2}
          items={CalendarData}
          theme={{
            agendaDayTextColor: "#409cb7",
            agendaDayNumColor: "#409cb7",
            agendaTodayColor: "black",
            agendaKnobColor: "whitesmoke",
          }}
          renderItem={(item, firstItemInDay) => (
            <Events
              item={item}
              firstItemInDay={firstItemInDay}
              userRole={userRole}
            />
          )}
          renderEmptyData={() => {
            return (
              <ScrollView
                refreshControl={
                  <RefreshControl
                    refreshing={refreshing}
                    onRefresh={() =>
                      GetCalendarData(
                        setCalendarData,
                        setRefreshing,
                        setLoading,
                        true,
                        setUserRole
                      )
                    }
                  />
                }
              >
                <View style={CalendarStyle.noSchedulePlaceHolder}>
                  <Text style={CalendarStyle.noScheduleLabel}>NO SCHEDULE</Text>
                </View>
              </ScrollView>
            );
          }}
        />
      )}
    </SafeAreaView>
  );
};

export default Calendar;
