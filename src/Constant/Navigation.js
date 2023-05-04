// Screens
import Home from "../Screens/Home";
import Calendar from "../Screens/Calendar";
import Book from "../Screens/Book";
import Chat from "../Screens/Chat";
import Settings from "../Screens/Settings";

// Images
import IconHome from "../Assets/Icons/icon-Home.png";
import IconHomeFilled from "../Assets/Icons/icon-Home-Filled.png";
import IconCalendar from "../Assets/Icons/icon-Calendar.png";
import IconCalendarFilled from "../Assets/Icons/icon-Calendar-Filled.png";
import IconBook from "../Assets/Icons/icon-Book.png";
import IconBookFilled from "../Assets/Icons/icon-Book-Filled.png";
import IconChat from "../Assets/Icons/icon-Chat.png";
import IconChatFilled from "../Assets/Icons/icon-Chat-Filled.png";
import IconSettings from "../Assets/Icons/icon-Settings.png";
import IconSettingsFilled from "../Assets/Icons/icon-Settings-Filled.png";

export const navigation = {
  student: [
    {
      name: "Home",
      component: Home,
      icon: IconHome,
      iconActive: IconHomeFilled,
      headerShown: false,
    },
    {
      name: "Calendar",
      component: Calendar,
      icon: IconCalendar,
      iconActive: IconCalendarFilled,
      headerShown: false,
    },
    {
      name: "Book",
      component: Book,
      icon: IconBook,
      iconActive: IconBookFilled,
      headerShown: false,
    },
    {
      name: "Chat",
      component: Chat,
      icon: IconChat,
      iconActive: IconChatFilled,
      headerShown: false,
    },
    {
      name: "Settings",
      component: Settings,
      icon: IconSettings,
      iconActive: IconSettingsFilled,
      headerShown: false,
    },
  ],
  teacher: [
    {
      name: "Home",
      component: Home,
      icon: IconHome,
      iconActive: IconHomeFilled,
      headerShown: false,
    },
    {
      name: "Calendar",
      component: Calendar,
      icon: IconCalendar,
      iconActive: IconCalendarFilled,
      headerShown: false,
    },
    {
      name: "Chat",
      component: Chat,
      icon: IconChat,
      iconActive: IconChatFilled,
      headerShown: false,
    },
    {
      name: "Settings",
      component: Settings,
      icon: IconSettings,
      iconActive: IconSettingsFilled,
      headerShown: false,
    },
  ],
  admin: [
    {
      name: "Calendar",
      component: Calendar,
      icon: IconCalendar,
      iconActive: IconCalendarFilled,
      headerShown: false,
    },
    {
      name: "Settings",
      component: Settings,
      icon: IconSettings,
      iconActive: IconSettingsFilled,
      headerShown: false,
    },
  ],
};
