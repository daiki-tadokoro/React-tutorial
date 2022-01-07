import { memo, ReactNode, VFC } from "react";
import { Button } from "@chakra-ui/react"

type Props = {
    children: ReactNode;
    disabled?: boolean;
    loading?: boolean;
    onClick: () => void;
}
export const PrimaryButton: VFC<Props> = memo((props) => {
    const { children, disabled = false, loading = false, onClick } = props;
    return (
        <Button bg="teal.400" disabled={disabled || loading} color="white" _hover={{ opacity: 0.8 }} isLoading={loading} onClick={onClick}>{children}</Button>
    )
});