import { CharacterArgs, CharacterResponse } from 'constant'
import { initApollo } from 'utils'

import { makeCharacterQuery } from './characterQuery'

export const getCharacter: (
  args: CharacterArgs
) => Promise<CharacterResponse> = async (args) => {
  try {
    const { data } = await initApollo().query(makeCharacterQuery(args))

    return data?.character
  } catch (e) {
    throw e
  }
}
