import React, { useState, useCallback, useEffect } from "react";
import { View, ImageBackground } from "react-native";
import CardStack, { Card } from "react-native-card-stack-swiper";
import { City, Filters, CardItem } from "../components";
import styles from "../assets/styles";
import DEMO from "../assets/data/demo";
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from './RootStackParams'
import { GiftedChat } from 'react-native-gifted-chat'

type chatScreenProp = StackNavigationProp<RootStackParamList, 'Chat'>;

export interface IMessage {
  _id: string | number
  text: string
  createdAt: Date | number
  user: User
  image?: string
  video?: string
  audio?: string
  system?: boolean
  sent?: boolean
  received?: boolean
  pending?: boolean
  quickReplies?: QuickReplies
}

export interface Reply {
  title: string
  value: string
  messageId?: any
}
 
export interface QuickReplies {
  type: 'radio' | 'checkbox'
  values: Reply[]
  keepIt?: boolean
}

export interface User {
  _id: string | number
  name: string
  avatar: string
}

function Chat(){

  const [messages, setMessages] = useState<IMessage[]>([]);

  const replyMessage : IMessage = 
    {
      _id: 1,
      text: 'น้องยังอยู่นะคะ สนใจรับไปดูแลไหมคะ?',
      createdAt: new Date(),
      user: {
        _id: 2,
        name: 'React Native',
        avatar: 'https://placeimg.com/140/140/any',
      },
    }

    
    const startMessage : IMessage = 
    {
      _id: 2,
      text: '🤍',
      image:'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F28%2F2020%2F10%2F13%2Fcorgi-dog-POPDOGNAME1020.jpg',
      createdAt: new Date(),
      user: {
        _id: 1,
        name: 'React Native',
        avatar: 'https://placeimg.com/140/140/any',
      },
    }

  useEffect(() => {
    setMessages([replyMessage,startMessage]
     ,
    )
  }, [])

  const onSend = useCallback((messages = []) => {
    setMessages(previousMessages => GiftedChat.append(previousMessages, messages))
  }, [])


  return (
    <ImageBackground
      source={require("../assets/images/bg.png")}
      style={styles.bg}
    >
        <GiftedChat
          messages={messages}
          onSend={messages => onSend(messages)}
          user={{
            _id: 1,
          }}
        />
    </ImageBackground>
  );
}

export default Chat;
