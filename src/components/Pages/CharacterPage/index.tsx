import type { NextPage } from 'next'
import { GetServerSideProps, GetServerSidePropsContext } from 'next'

import Detail from 'components/Detail'
import { getCharacter } from 'components/Pages/CharacterPage/api/getCharacter'
import { CharacterResponse } from 'constant'

interface Props {
  data: CharacterResponse
}

export const CharacterPage: NextPage<Props> = ({ data }) => (
  <Detail detailData={data} />
)

export const getServerSideProps: GetServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const id = context?.params?.id
  const data = await getCharacter({ id })

  return {
    props: {
      data,
    },
  }
}
