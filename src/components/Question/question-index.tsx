import React, { ReactNode } from "react";
import "./question-styles.scss";

type QuestionProps = {
    content: string;
    author: {
        name: string;
        avatar: string;
    };
    children?: ReactNode;
    isAnswered?: boolean;
    isHighlighted?: boolean;
};

export function Question({
    content,
    author,
    children,
    isAnswered = false,
    isHighlighted = false,
}: QuestionProps) {
    return (
        <div className={`question ${isAnswered ? 'answered' : ''} ${(isHighlighted && !isAnswered) ? 'highlighted' : ''}`}>
            <p>{content}</p>
            <footer>
                <div className="user-info">
                    <img src={author.avatar} alt={author.name} />
                    <span>{author.name}</span>
                </div>
                <div className="action-buttons">{children}</div>
            </footer>
        </div>
    );
}
