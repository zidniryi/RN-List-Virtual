export interface ButtonPropsApp {
    text: string;
    color: string;
    background: string;
    onPress?: () => void;
    size?: 'medium' | 'small';
    isHaveOpacity?: boolean;
}