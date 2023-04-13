import { render,screen } from "@testing-library/react";
import { PostCard } from "."
import { PostCardMock } from "./mock";


const mock = PostCardMock;
describe('Postcard ---', () => {
    it('should render postcard', () => {
        render(<PostCard {...mock}/>)

        expect(screen.getByRole('img', {title: 'title 1'}))
        .toHaveAttribute('src', mock.cover);
        expect(screen.getByRole('heading', {name: 'title 1'})).toBeInTheDocument();
    })
});