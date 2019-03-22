import moment from 'moment'

export const objectToArray = (object) => {
  if (object) {
		console.log('OBJECTTOARRAY', object)
		const result = Object.entries(object)
			.map(e => ({...e[1], id: e[0]}) );
		return result;
  }
}

export const createNewEvent = (user, photoURL, event) => {
  event.date = moment(event.date).toDate();
  return {
    ...event,
    hostUid: user.uid,
    hostedBy: user.displayName,
    hostPhotoURL: photoURL || '/assets/user.png',
    created: Date.now(),
    attendees: {
      [user.uid]: {
        going: true,
        joinDate: Date.now(),
        photoURL: photoURL || '/assets/user.png',
        displayName: user.displayName,
        host: true
      }
    }
  }
}