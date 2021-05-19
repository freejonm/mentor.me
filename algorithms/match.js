const rankAndSort = (currentUser, mentors) => {
    let sortedMentors = []
    
    mentors.map((mentor) => {
        let score = 0;

        currentUser.details.map((detail) => {
            if (mentor.details.includes(detail)) {
                score++;
            }
        })

        mentor.score = score;

        if (currentUser.friendsList.length === 0) {
            sortedMentors.push(mentor);
        } else {

            for (let index = 0; index < currentUser.friendsList.length; index++) {
                let friend = currentUser.friendsList[index];

                if (mentor._id == friend.friendId) {  } else {
                sortedMentors.push(mentor);
                break
                }
                
            }
            
        }
    });

    sortedMentors.sort((a, b) => (a.score > b.score) ? -1 : 1);
    return sortedMentors
}

module.exports = rankAndSort;