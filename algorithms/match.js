const rankAndSort = (mentee, mentors) => {
    mentors.map((mentor) => {
        let score = 0
        
        mentee.details.map((detail) => {
            if (mentor.details.includes(detail)) {
                score++
            }
        })
        mentor.score = score;
    });
    
    mentors.sort((a, b) => (a.score > b.score) ? -1 : 1);
    
    
    return mentors
}

module.exports = rankAndSort;