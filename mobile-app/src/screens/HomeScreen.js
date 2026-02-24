import React, { useEffect, useState } from "react";
import { View, Text, FlatList } from 'react-native';
import { fetchPosts  } from "../api/apiClient";

export default function HomeScreen() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetchPosts().then(setPosts).catch(console.error);
    }, []);

    return (
        <View style={{ flex:1, padding: 20 }}>
            <FlatList
                data={posts}
                keyExtractor={item => item.id.toString()}
                renderItem={({ item }) => <Text>{item.title.rendered}</Text>}
            />
        </View>
    );
}