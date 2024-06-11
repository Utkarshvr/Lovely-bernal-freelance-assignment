import { ConnectCardItemType } from "@/components/ConnectCard";

const connectCardItems: ConnectCardItemType[] = [
  {
    title: "Email",
    subtitle: "Receive an email everytime a user submite their answer",
    isActive: true,
    image: "/assets/mail.png",
    // image: "https://media.istockphoto.com/id/654095766/vector/email-symbol-icon.jpg?s=170667a&w=0&k=20&c=Jk0Vie5z8LJTWQB1aHEza1dVIGqNnvqfbgmzCjTm9wI=",
  },
  {
    title: "Google Sheets",
    subtitle:
      "Send your data straight to Google Sheets. Automatically syncs as results come in.",
    image: "/assets/sheets.png",

    // image: "https://cdn-icons-png.flaticon.com/256/2965/2965327.png",
  },
  {
    title: "Excel",
    subtitle:
      "Send your typeform responses to Excel Online. Turn feedback into graphs, support quries into workflows, and much more.",

    image: "/assets/excel.png",

    // image:
    //   "https://w7.pngwing.com/pngs/878/917/png-transparent-microsoft-excel-icon.png",
  },
];

export default connectCardItems;
