// import React, {useState} from "react";
// import {Control, Controller, FieldValues} from "react-hook-form";
// import {
//   StyleSheet,
//   TextInput,
//   TextStyle,
//   TouchableOpacity,
//   View,
//   ViewStyle,
// } from "react-native";
// import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
// import {colors} from "../../../../theme";
// import {normalize} from "../../../../utils";
// import {CustomText} from "../../custom-text";

// interface InputProps<T extends FieldValues> {
//   type?: "password" | "text";
//   label?: string;
//   name: string;
//   control: Control<T>;
//   isRequired: boolean;
//   autocapitalize?: "none" | "sentences" | "words" | "characters";
//   placeholder?: string;
//   style?: ViewStyle | TextStyle;
//   rightIcon?: React.ReactNode;
// }

// const Input = ({
//   label,
//   style,
//   name,
//   control,
//   isRequired,
//   type,
//   placeholder,
//   autocapitalize,
// }: InputProps<any>) => {
//   const [showPassword, setShowPassword] = useState(false);

//   const toggleShowPassword = () => {
//     setShowPassword(!showPassword);
//   };

//   return (
//     <View style={[Styles.container, style]}>
//       {label && (
//         <CustomText style={Styles.label} size="xs" weight="bold" color="light">
//           {label}
//         </CustomText>
//       )}
//       <View style={Styles.inputContainer}>
//         <Controller
//           name={name}
//           control={control}
//           rules={{
//             required: isRequired,
//           }}
//           render={({field: {onChange, onBlur, value}}) => (
//             <TextInput
//               style={Styles.textInput}
//               secureTextEntry={type === "password" && !showPassword}
//               placeholder={placeholder}
//               onBlur={onBlur}
//               value={value}
//               onChangeText={onChange}
//               placeholderTextColor={colors.neutral[600]}
//               autoCapitalize={autocapitalize}
//             />
//           )}
//         />

//         {type === "password" && (
//           <TouchableOpacity
//             style={Styles.iconContainer}
//             onPress={toggleShowPassword}>
//             {!showPassword ? (
//               <MaterialCommunityIcons
//                 name="eye"
//                 size={normalize(20)}
//                 color={colors.neutral[500]}
//               />
//             ) : (
//               <MaterialCommunityIcons
//                 name="eye-off"
//                 size={normalize(20)}
//                 color={colors.neutral[500]}
//               />
//             )}
//           </TouchableOpacity>
//         )}
//       </View>
//     </View>
//   );
// };

// export default Input;

// const Styles = StyleSheet.create({
//   container: {},

//   inputContainer: {
//     height: normalize(40),
//     paddingHorizontal: normalize(10),
//     borderRadius: normalize(5),
//     borderColor: colors.neutral[200],
//     borderWidth: normalize(1),
//     backgroundColor: colors.neutral[100],
//     flexDirection: "row",
//     justifyContent: "space-between",
//   },

//   label: {
//     marginBottom: normalize(8),
//   },

//   textInput: {
//     // backgroundColor: 'green',
//     flex: 1,
//     color: colors.neutral[1000],
//   },

//   iconContainer: {
//     justifyContent: "center",
//     alignContent: "center",
//     paddingHorizontal: normalize(10),
//   },
// });
