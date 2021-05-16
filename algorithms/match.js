const rankAndSort = (currentUser, mentors) => {
    let sortedMentors = []
    
    mentors.map((mentor) => {
        let score = 0
        currentUser.details.map((detail) => {
            if (mentor.details.includes(detail)) {
                score++
            }
        })
        mentor.score = score;

        currentUser.friendsList.map(map => {
            if (mentor._id == map.friendId) {
            } else {
                sortedMentors.push(mentor)
            }
        })
    });
    
    sortedMentors.sort((a, b) => (a.score > b.score) ? -1 : 1);
    return sortedMentors
}

module.exports = rankAndSort;