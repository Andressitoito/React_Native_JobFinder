import React, { useState } from "react";
import { View, Text } from "react-native";
import {
	View,
	Text,
	TextInput,
	TouchableOpacity,
	Image,
	FlatList,
} from "react-native";
import { useRouter } from "expo-router";
import styles from "./welcome.style";
import { isoncs, SIZES } from "../../../constants";

const Welcome = () => {
	const router = useRouter();

	return (
		<View>
			<View style={styles.container}>
				<Text style={styles.userName}>Hello Andy</Text>
				<Text style={styles.welcomeMessage}>Find your perfect Job</Text>

				<View style={styles.searchContainer}>
					<View style={styles.searchWrapper}>
						<TextInput style={searchInput} />
					</View>
				</View>
			</View>
		</View>
	);
};

export default Welcome;
