import { Badge } from "@chakra-ui/react"

interface Props {
  text: string
}

const Pill = ({text}: Props) => {
  return (
    <div>
      <Badge borderRadius="3xl" px={4} py={2} mr="4" mb="4" color="#ffffff" bg="blue.100" textTransform="none">
        {text}
      </Badge>
    </div>
  )
}

export default Pill