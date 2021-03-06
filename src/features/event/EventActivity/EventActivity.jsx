import React from 'react'
import { Header, Segment, Feed, Sticky } from 'semantic-ui-react'
import EventActivityItem from './EventActivityItem'


const EventActivity = ({activities, contextRef}) => {
  return (
    <Sticky context={contextRef}>
      <Header attached='top' content='Недавние события'/>
      <Segment attached>
        <Feed>
          {activities && activities.map((activity) => (
            <EventActivityItem key={activity.id} activity={activity}/>
          ))}
        </Feed>
      </Segment>
    </Sticky>
  )
}

export default EventActivity
