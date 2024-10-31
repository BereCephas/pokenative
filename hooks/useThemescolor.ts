import { useColorScheme } from "react-native";
import { Colors } from "@/constants/colors";
export default  function useThemecolor(){
    const theme=useColorScheme() ?? "light";
    return Colors[theme];
}