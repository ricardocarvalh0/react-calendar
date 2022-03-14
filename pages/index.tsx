import { initializeApollo } from '../apollo/client'
import Calendar from "../components/calendar/Calendar";

const Index = () => {
  return (
    <Calendar />
  )
}

export async function getStaticProps() {
  const apolloClient = initializeApollo()

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
    },
  }
}

export default Index
