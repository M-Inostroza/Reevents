import React from "react";
import { Button, Icon, Item, ItemContent, List, Segment } from "semantic-ui-react";
import EventLisAttendee from "./EventListAttendee";

export default function EventListItem({event, selectEvent, deleteEvent}) {
    return (
        <Segment.Group>
            <Segment>
                <Item.Group>
                    <Item>
                        <Item.Image size="tiny" circular src={event.hostPhotoURL}/>
                        <ItemContent>
                            <Item.Header content={event.title}/>
                            <Item.Description>
                                Hosted by {event.hostedBy}
                            </Item.Description>
                        </ItemContent>
                    </Item>
                </Item.Group>
            </Segment>
            <Segment>
                <span>
                    <Icon name='clock' /> {event.date}
                    <Icon name='marker' /> {event.veue}
                </span>
            </Segment>
            <Segment secundary>
                <List horizontal>
                    {event.attendees.map(attendee => (
                        <EventLisAttendee key={attendee.id} attendee={attendee} /> 
                    ))}
                </List>
            </Segment>
            <Segment clearing>
                <div>
                    {event.description}
                </div>
                <Button 
                onClick={() => deleteEvent(event.id)} 
                color="red" 
                floated="right" 
                content="Delete"/>
                <Button 
                onClick={() => selectEvent(event)} 
                color="teal" 
                floated="right" 
                content="view"/>
            </Segment>
        </Segment.Group>
    )
}