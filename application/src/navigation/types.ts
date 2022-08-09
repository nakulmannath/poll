import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import type { RouteProp } from '@react-navigation/native';

export interface IData {
    title: string;
    author: string;
    url: string;
    created_at: string;
  }

export type AppStackNavigatorParamList = {
    Home: undefined;
    Details: {postData: IData};
};

export type HomeScreenNavigationProp = NativeStackNavigationProp<
    AppStackNavigatorParamList,
    "Details"
>;

export type DetailsScreenRouteProp = RouteProp<
AppStackNavigatorParamList,
  'Details'
>;