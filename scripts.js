document.getElementById('submitComment').addEventListener('click', function() {
    const nameInput = document.getElementById('nameInput');
    const commentInput = document.getElementById('commentInput');
    const nameText = nameInput.value.trim();
    const commentText = commentInput.value.trim();

    if (nameText !== "" && commentText !== "") {
        const commentsList = document.getElementById('commentsList');
        const newComment = document.createElement('li');

        // Create a span for the commenter's name
        const authorSpan = document.createElement('span');
        authorSpan.className = 'comment-author';
        authorSpan.textContent = nameText + ':';

        // Create a span for the comment text
        const commentSpan = document.createElement('span');
        commentSpan.className = 'comment-text';
        commentSpan.textContent = commentText;

        // Append both spans to the list item
        newComment.appendChild(authorSpan);
        newComment.appendChild(commentSpan);

        // Append the new comment to the comments list
        commentsList.appendChild(newComment);

        // Clear the input fields after adding the comment
        nameInput.value = "";
        commentInput.value = "";
        
        const firebaseConfig = {
            apiKey: "AIzaSyDVJKQrePc2tdTnu6a9-UVedQh_RHM2JBI",
            authDomain: "website-56892.firebaseapp.com",
            projectId: "website-56892",
            storageBucket: "website-56892.appspot.com",
            messagingSenderId: "230713199366",
            appId: "1:230713199366:web:e3a19099a1d1dd66196c87"
          };
    } else {
        alert("Please enter both your name and a comment, and be respectfull");
    }
});
