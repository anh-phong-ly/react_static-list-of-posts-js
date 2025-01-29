export const UserInfo = ({ user }) => {
  return (
    <a className="CommentInfo__email" href={`mailto:${user.email}`}>
      {user.name}
    </a>
  );
};
