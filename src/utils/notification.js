export default async (title, text) => {
  console.log(Notification.permission);
  if (!Notification) return;
  if (Notification.permission === "default")
    await Notification.requestPermission();
  if (!Notification.permission === "granted") return;

  const notification = new Notification(title, { body: text });
  notification.onclick = e => {
    e.preventDefault();
    window.focus();
    notification.close();
  };
};
