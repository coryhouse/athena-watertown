// API proxy (make HTTP calls for my app kthxbye)

export function getUsers() {
  return fetch("http://localhost:3001/users").then(response => {
    if (response.ok) {
      return response.json();
    }
    throw new Error("Bad network response.");
  });
}

export function deleteUser(userId) {
  return fetch("http://localhost:3001/users/" + userId, {
    method: "DELETE"
  }).then(response => {
    if (response.ok) {
      return response.json();
    }
    throw new Error("Bad network response.");
  });
}
