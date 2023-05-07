'use client';

import axios from "axios";
import { useEffect, useRef, useState } from "react";

import useConversation from "@/app/hooks/useConversations";import { FullMessageType } from "@/app/types";
import { find } from "lodash";

interface BodyProps {
  initialMessages: FullMessageType[];
}

const Body: React.FC<BodyProps> = ({ initialMessages = [] }) => {
  const bottomRef = useRef<HTMLDivElement>(null);
  
  const { conversationId } = useConversation();

  useEffect(() => {
    axios.post(`/api/conversations/${conversationId}/seen`);
  }, [conversationId]);

  return ( 
    <div className="flex-1 overflow-y-auto">
      <div className="pt-24" ref={bottomRef} />
    </div>
  );
}
 
export default Body;