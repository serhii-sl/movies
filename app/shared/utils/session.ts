import AsyncStorage from '@react-native-community/async-storage'
// constants
import { EStorageKeys } from '@md-shared/constants/storage'

export const getSessionId = async () => {
  const sessionId = await AsyncStorage.getItem(EStorageKeys.SESSION_ID)
  return sessionId ?? ''
}
