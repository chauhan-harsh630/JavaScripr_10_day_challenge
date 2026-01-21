const username = "chauhan-harsh630";


async function fatchuser(username) {
    try {
        const res = await fetch(`https://api.github.com/users/${username}`);
        if (!res.ok) {
            throw new Error("User not found");
        }

        const data = await res.json();
        console.log(data.id);
        console.log(data.login);
        console.log(data.user_view_type);
        console.log(data.name);
        console.log(data.following);
        console.log(data.bio);
    }
    catch(error){
        console.error(error.meassage);
    }
}

fatchuser(username);