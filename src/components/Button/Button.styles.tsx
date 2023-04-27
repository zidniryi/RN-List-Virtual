export interface ButtonPropsApp {
    text: string;
    color: string;
    onPress: () => void;
    size?: 'medium' | 'small';
}