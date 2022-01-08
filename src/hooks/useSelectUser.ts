import { useCallback, useState } from "react";
import { User } from "../components/types/api/user";

type Props = {
  id: number;
  users: Array<User>;
  onOpen: () => void;
};

// 選択したユーザー情報を特定したモーダル を表示するカスタムフック
export const useSelectUser = () => {
  const [selectedUser, setSelectUser] = useState<User | null>(null);
  const onSelectUser = useCallback((props: Props) => {
    const { id, users, onOpen } = props;
    const targetUser = users.find((user) => user.id === id);
    setSelectUser(targetUser!);
    onOpen();
  }, []);
  return { onSelectUser, selectedUser };
};
