import { defineStore } from 'pinia'
import piniaPersistConfig from '@/config/piniaPersist'

/**
 * chat
 */
// Chat Store
export const useChatStore = defineStore({
  id: 'useChatStore',
  state: () => ({
    apiBaseUrl: 'https://api.4chat.me',
    apiToken: 'sk-65794a68624763694f694a49557a49314e694a392e65794a755957316c496a6f695a33566e5a575a69587a51324f544534587a51324f5445344969776961574630496a6f784e7a4d314d546b304e7a497a4c434a6c654841694f6a45334d7a59304d44517a4d6a4e392e53535652397967304c572d4842345669714f414c6377706857304e696a377062313065436f723971356477',
    conversations: [
      {
        id: 1,
        messages: [
          {
            role: 'system',
            content: '有什么我能帮助您的吗？',
          },
        ],
      },
    ],
    activeConversationId: 0,
    modelSelect: '',
  }),
  actions: {
    setApiBaseUrl(url: string) {
      this.apiBaseUrl = url
    },
    setApiToken(token: string) {
      this.apiToken = token
    },
    addConversation() {
      const newChatId = this.conversations.length + 1
      this.conversations.push({ id: newChatId, messages: [] })
      this.activeConversationId = this.conversations.length - 1
    },
    deleteConversation(index: number) {
      if (this.conversations.length === 1) {
        this.conversations = []
        this.activeConversationId = -1 // or null
      } else {
        this.conversations.splice(index, 1)
        if (this.activeConversationId >= index) {
          this.activeConversationId = Math.max(0, this.activeConversationId - 1)
        }
      }
    },
  },
  persist: piniaPersistConfig('ChatStore'),
})
