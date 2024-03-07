function handleUser (){
    const USER_LIST_API = 'https://jsonplaceholder.typicode.com/users';
    const getUserList = async () => {
    const response = await fetch(USER_LIST_API);
    return response.json();
    };
    const contentDiv1 = document.querySelector(".content");
    contentDiv1.innerHTML = `
        <h1>Loading...</h1>
    `;

    
    
    const contentDiv = document.querySelector('.content');
    contentDiv.innerHTML = `
        
    `;
    
    let card = null;

    getUserList().then((data) => {
        data.forEach(element => {
           card = generateUserCard(element);
            contentDiv.insertAdjacentHTML( 'beforeend', card );
        });
    })
     .catch((error) => {
        contentDiv.innerHTML = `<h1>${error}</h1>`;
    });   
}

const generateUserCard = (userInfo) => {
    return `
      <div style='border: 1px solid red'>
          <p>name: ${userInfo.name}</p>
          <p>email: ${userInfo.email}</p>
          <p>username: ${userInfo.username}</p>
          <p>phone: ${userInfo.phone}</p>
          <button onclick='showDetail(${JSON.stringify(
            userInfo
          )})'>Show Detail</button>
      </div>
  `;
  };

const showDetail = function(user) {  
    const userInfoDiv = document.getElementById("info");
    const userString = JSON.stringify(user);
    userInfoDiv.innerHTML = `
        <h2>${user.name}</h2>
        <p><strong>Email:</strong> ${user.email}</p>
        <p><strong>Username:</strong> ${user.username}</p>
        <p><strong>Phone:</strong> ${user.phone}</p>
    `;
    document.getElementById("modal").style.display = "block";
};

function close(){
    document.getElementById("modal").style.display = "none";
}



function handleTodo(){
    const TODO_LIST_API = 'https://jsonplaceholder.typicode.com/todos';
    const getTodoList = async () => {
    const response = await fetch(TODO_LIST_API);
    return response.json();
    };
    const contentDiv1 = document.querySelector(".content");
    contentDiv1.innerHTML = `
      <h1>Loading...</h1>
  `;

    const contentDiv = document.querySelector('.content');
    console.log([contentDiv]);

    let card = null;

    getTodoList().then((data) => {
        data.forEach(element => {
           card = generateToDoListCard(element);
            contentDiv.insertAdjacentHTML( 'beforeend', card );
        });
    })
     .catch((error) => {
        contentDiv.innerHTML = `<h1>${error}</h1>`;
    });
}

const generateToDoListCard = (ToDoList) => {
    return `
      <div style='border: 1px solid red'>
          <p>User ID: ${ToDoList.userId}</p>
          <p>ID: ${ToDoList.id}</p>
          <p>username: ${ToDoList.title}</p>
          ${ToDoList.completed ? '<p>Completed</p>' : '<p>Not Completed</p>'}
          <button onclick='showDetail1(${JSON.stringify(
            ToDoList
          )})'>Show Detail</button>
      </div>
  `;
  };


const showDetail1 = (todo) => {
    const userInfoDiv = document.getElementById("info");
    const userString = JSON.stringify(todo);
    userInfoDiv.innerHTML = `
        <h2>${todo.title}</h2>
        <p><strong>User ID:</strong> ${todo.userId}</p>
        <p><strong>ID:</strong> ${todo.id}</p>
        <p><strong>Completed:</strong> ${todo.completed}</p>
    `;
    document.getElementById("modal").style.display = "block";
};
function close(){
    document.getElementById("modal").style.display = "none";
}

function handlePhoto(){
    const PHOTO_LIST_API = 'https://jsonplaceholder.typicode.com/photos';
    const getPhotoList = async () => {
    const response = await fetch(PHOTO_LIST_API);
    return response.json();
    };
    const contentDiv1 = document.querySelector(".content");
    contentDiv1.innerHTML = `
      <h1>Loading...</h1>
  `;

    const contentDiv = document.querySelector('.content');
    console.log([contentDiv]);

    let card = null;

    getPhotoList().then((data) => {
        data.forEach(element => {
           card = generatePhotoListCard(element);
            contentDiv.insertAdjacentHTML( 'beforeend', card );
        });
    })
     .catch((error) => {
        contentDiv.innerHTML = `<h1>${error}</h1>`;
    });
}

const generatePhotoListCard = (PhotoList) => {
    return `
      <div style='border: 1px solid red'>
          <p>Album ID: ${PhotoList.albumId}</p>
          <p>ID: ${PhotoList.id}</p>
          <p>Title: ${PhotoList.title}</p>
          <img src=${PhotoList.url} alt="Photo" width="100" height="100">
          <p>Thumbnail URL: ${PhotoList.thumbnailUrl}</p>
          <button onclick='showDetail2(${JSON.stringify(
            PhotoList
          )})'>Show Detail</button>
      </div>
  `;
  };

  const showDetail2 = (photo) => {
    const userInfoDiv = document.getElementById("info");
    const userString = JSON.stringify(photo);
    userInfoDiv.innerHTML = `
        <h2>${photo.title}</h2>
        <p><strong>Album ID:</strong> ${photo.albumId}</p>
        <p><strong>ID:</strong> ${photo.id}</p>
        <img src=${photo.url} alt="Photo" width="100" height="100">
        <p><strong>Thumbnail URL:</strong> ${photo.thumbnailUrl}</p>
    `;
    document.getElementById("modal").style.display = "block";
};
function close(){
    document.getElementById("modal").style.display = "none";
}

function handleAlbum(){
    const ALBUM_LIST_API = 'https://jsonplaceholder.typicode.com/albums';
    const getAlbumList = async () => {
    const response = await fetch(ALBUM_LIST_API);
    return response.json();
    };



    const contentDiv = document.querySelector('.content');
    console.log([contentDiv]);

    let card = null;

    getAlbumList().then((data) => {
        data.forEach(element => {
           card = generateAlbumListCard(element);
            contentDiv.insertAdjacentHTML( 'beforeend', card );
        });
    })
     .catch((error) => {
        contentDiv.innerHTML = `<h1>${error}</h1>`;
    });
}

const generateAlbumListCard = (AlbumList) => {
    return `
      <div style='border: 1px solid red'>
          <p>User ID: ${AlbumList.userId}</p>
          <p>ID: ${AlbumList.id}</p>
          <p>Title: ${AlbumList.title}</p>
          <button onclick='showDetail3(${JSON.stringify(
            AlbumList
          )})'>Show Detail</button>
      </div>
  `;
  }
  const showDetail3 = (album) => {
    const userInfoDiv = document.getElementById("info");
    const userString = JSON.stringify(album);
    userInfoDiv.innerHTML = `
        <h2>${album.title}</h2>
        <p><strong>User ID:</strong> ${album.userId}</p>
        <p><strong>ID:</strong> ${album.id}</p>
    `;
    
    document.getElementById("modal").style.display = "block";
};
function close(){
    document.getElementById("modal").style.display = "none";
}


function handlePost(){
    const POST_LIST_API = 'https://jsonplaceholder.typicode.com/posts';
    const getPostList = async () => {
    const response = await fetch(POST_LIST_API);
    return response.json();
    };

    const contentDiv1 = document.querySelector(".content");
    contentDiv1.innerHTML = `
      <h1>Loading...</h1>
  `;

    const contentDiv = document.querySelector('.content');
    console.log([contentDiv]);

    let card = null;

    getPostList().then((data) => {
        data.forEach(element => {
           card = generatePostListCard(element);
            contentDiv.insertAdjacentHTML( 'beforeend', card );
        });
    })
     .catch((error) => {
        contentDiv.innerHTML = `<h1>${error}</h1>`;
    });
}

const generatePostListCard = (PostList) => {
    return `
      <div style='border: 1px solid red'>
          <p>User ID: ${PostList.userId}</p>
          <p>ID: ${PostList.id}</p>
          <p>Title: ${PostList.title}</p>
          <p>Body: ${PostList.body}</p>
          <button onclick='showDetail4(${JSON.stringify(
            PostList
          )})'>Show Detail</button>
      </div>
  `;
  }
  const showDetail4 = (post) => {
    const userInfoDiv = document.getElementById("info");
    const userString = JSON.stringify(post);
    userInfoDiv.innerHTML = `
        <h2>${post.title}</h2>
        <p><strong>User ID:</strong> ${post.userId}</p>
        <p><strong>ID:</strong> ${post.id}</p>
        <p><strong>Body:</strong> ${post.body}</p>
    `;
    document.getElementById("modal").style.display = "block";
};
function close(){
    document.getElementById("modal").style.display = "none";
}