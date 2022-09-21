declare module '@next-tools/apollo'

type StaticImageData = {
  height: number
  placeholder?: string
  src: string
  width: number
}

declare module '*.gif' {
  const content: StaticImageData
  export default content
}
