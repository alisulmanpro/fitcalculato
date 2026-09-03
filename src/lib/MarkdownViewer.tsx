"use client"

import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import type { Components } from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import {
    MdHelpOutline,
    MdFunctions,
    MdCheckCircle,
    MdLightbulb,
    // MdMenuBook,
    // MdDirectionsRun,
    MdInfoOutline,
    MdArrowForward
} from 'react-icons/md';

interface Props {
    filePath: string;
}

// Custom Markdown Component Renderers
const components: Components = {
    // H2 Headings
    h2: ({ children, ...props }) => {
        const text = String(children);
        // const isFAQ = text.toLowerCase().includes('faq') || text.toLowerCase().includes('question');
        // const isRef = text.toLowerCase().includes('reference');

        return (
            <div className="pt-8 pb-3 mt-6 first:mt-0 first:pt-0">
                <div className="flex items-center gap-3">
                    {/* <span className="p-2 rounded-lg bg-primary/15 text-primary">
                        {isFAQ ? (
                            <MdHelpOutline className="text-2xl" />
                        ) : isRef ? (
                            <MdMenuBook className="text-2xl" />
                        ) : (
                            <MdDirectionsRun className="text-2xl" />
                        )}
                    </span> */}
                    <h2
                        className="text-2xl md:text-3xl font-extrabold text-base-content tracking-tight"
                        {...props}
                    >
                        {children}
                    </h2>
                </div>
            </div>
        );
    },

    // H3 Headings
    h3: ({ children, ...props }) => {
        const text = String(children);
        // If it's a step or formula subhead
        const isNumbered = /^[0-9]+\./.test(text.trim());

        return (
            <h3
                className="text-lg md:text-xl font-bold text-base-content mt-6 mb-3 flex items-center gap-3"
                {...props}
            >
                {isNumbered && (
                    <span className="badge badge-lg badge-primary font-bold text-xs py-2 px-3">
                        {text.split('.')[0]}
                    </span>
                )}
                <span>{isNumbered ? text.replace(/^[0-9]+\.\s*/, '') : children}</span>
            </h3>
        );
    },

    // Paragraphs with intelligent detection for formulas, steps, and key tips
    p: ({ children }) => {
        const childrenArray = React.Children.toArray(children);

        // Check if paragraph contains Step guide (e.g. "Step 1: ...")
        const firstChild = childrenArray[0];
        const isStep =
            (typeof firstChild === 'string' && /^Step\s+[0-9]+:/i.test(firstChild)) ||
            (React.isValidElement<{ children?: unknown }>(firstChild) &&
                typeof firstChild.props.children === 'string' &&
                /^Step\s+[0-9]+:/i.test(firstChild.props.children));

        if (isStep) {
            return (
                <div className="card bg-base-100 border border-base-300 shadow-xs rounded-xl p-4 md:p-5 my-3 hover:border-primary/40 transition-all">
                    <div className="flex items-start gap-3.5">
                        <div className="p-2 rounded-lg bg-primary/20 text-primary-content shrink-0 mt-0.5">
                            <MdArrowForward className="text-lg text-primary" />
                        </div>
                        <div className="text-sm md:text-base text-base-content/90 leading-relaxed font-normal">
                            {children}
                        </div>
                    </div>
                </div>
            );
        }

        // Check if paragraph starts with key insight (e.g. bold takeaway)
        const isKeyTakeaway =
            React.isValidElement(firstChild) &&
            firstChild.type === 'strong' &&
            childrenArray.length > 1;

        if (isKeyTakeaway) {
            return (
                <div className="bg-base-200/50 border-l-4 border-l-primary border-y border-r border-base-300/80 rounded-r-xl p-4 my-3 text-sm md:text-base text-base-content/90 leading-relaxed shadow-xs flex items-start gap-3">
                    <MdLightbulb className="text-xl text-primary shrink-0 mt-0.5" />
                    <div>{children}</div>
                </div>
            );
        }

        // Normal paragraph
        return (
            <p className="text-sm md:text-base text-base-content/85 leading-relaxed my-3">
                {children}
            </p>
        );
    },

    // Blockquotes as DaisyUI Alerts
    blockquote: ({ children }) => (
        <div className="alert alert-info/10 border border-primary/40 rounded-xl p-4 my-5 text-sm md:text-base text-base-content flex items-start gap-3 shadow-xs">
            <MdInfoOutline className="text-2xl text-primary shrink-0 mt-0.5" />
            <div className="leading-relaxed">{children}</div>
        </div>
    ),

    // Lists with beautiful check icons
    ul: ({ children }) => (
        <ul className="space-y-2.5 my-4 text-sm md:text-base text-base-content/85">
            {children}
        </ul>
    ),

    li: ({ children }) => (
        <li className="flex items-start gap-2.5">
            <MdCheckCircle className="text-primary text-lg shrink-0 mt-0.5" />
            <div className="leading-relaxed">{children}</div>
        </li>
    ),

    // Strong highlight
    strong: ({ children }) => (
        <strong className="font-bold text-base-content">
            {children}
        </strong>
    ),

    // Links
    a: ({ href, children }) => (
        <a
            href={href}
            rel="noopener noreferrer"
            className="text-primary font-semibold hover:underline decoration-primary/50 underline-offset-2 transition-colors"
        >
            {children}
        </a>
    ),

    // Horizontal Rule
    hr: () => <hr className="hidden" />,

    // Tables
    table: ({ children }) => (
        <div className="overflow-x-auto my-6 rounded-xl border border-base-300 shadow-sm">
            <table className="table table-zebra w-full text-sm md:text-base">
                {children}
            </table>
        </div>
    ),

    th: ({ children }) => (
        <th className="bg-neutral text-white font-bold py-3.5 px-4 text-left">
            {children}
        </th>
    ),

    td: ({ children }) => (
        <td className="py-3 px-4 text-base-content">
            {children}
        </td>
    )
};

export default function MarkdownViewer({ filePath }: Props) {
    const [markdownContent, setMarkdownContent] = useState('');
    const [error, setError] = useState('');

    useEffect(() => {
        const loadMarkdown = async () => {
            try {
                setError('');
                setMarkdownContent('');

                // Remove /public from the filesystem-style path
                // Example:
                // /public/markdown/blogs/test.md
                // becomes:
                // /markdown/blogs/test.md
                const publicPath = filePath.replace(/^\/public/, '');

                const response = await fetch(publicPath);

                if (!response.ok) {
                    throw new Error(`Failed to fetch markdown: ${response.status}`);
                }

                const text = await response.text();

                setMarkdownContent(text);

            } catch (error) {
                console.error('Error loading markdown:', error);
                setError(`Markdown file not found at: ${filePath}`);
            }
        };

        if (filePath) {
            loadMarkdown();
        }
    }, [filePath]);

    // Separate main content and FAQs if FAQs section exists
    const faqMatch = markdownContent.split(/##\s+(?:Frequently Asked Questions|FAQs)/i);
    const mainContent = faqMatch[0];
    const faqAndRest = faqMatch[1] || '';

    // Extract FAQs into distinct items if available
    const referencesMatch = faqAndRest.split(/##\s+References/i);
    const rawFaqSection = referencesMatch[0] || '';
    const rawReferencesSection = referencesMatch[1] || '';

    // Parse FAQ Question & Answer pairs (e.g. ### Question \n Answer)
    const faqItems: { question: string; answer: string }[] = [];
    if (rawFaqSection.trim()) {
        const questionBlocks = rawFaqSection.split(/###\s+/);
        questionBlocks.forEach((block) => {
            const trimmed = block.trim();
            if (!trimmed) return;
            const lines = trimmed.split('\n');
            const question = lines[0]?.trim();
            const answer = lines.slice(1).join('\n').trim();
            if (question && answer) {
                faqItems.push({ question, answer });
            }
        });
    }

    return (
        <div className="w-full flex flex-col gap-6">
            {/* Main Article Body */}
            <article className="card p-6 md:p-10 space-y-6">
                <ReactMarkdown
                    remarkPlugins={[remarkGfm]}
                    rehypePlugins={[rehypeRaw]}
                    components={components}
                >
                    {mainContent}
                </ReactMarkdown>

                {/* Interactive DaisyUI FAQ Section */}
                {faqItems.length > 0 && (
                    <div className="pt-8 space-y-4">
                        <div className="flex items-center gap-3 mb-4">
                            <span className="p-2 rounded-lg bg-primary/15 text-primary">
                                <MdHelpOutline className="text-2xl" />
                            </span>
                            <div>
                                <h2 className="text-2xl md:text-3xl font-extrabold text-base-content tracking-tight">
                                    Frequently Asked Questions
                                </h2>
                            </div>
                        </div>

                        <div className="space-y-3">
                            {faqItems.map((faq, index) => (
                                <details
                                    key={index}
                                    className="collapse collapse-arrow bg-base-200/50 border border-base-300 rounded-xl hover:border-primary/40 transition-colors shadow-xs group"
                                >
                                    <summary className="collapse-title text-base font-bold text-base-content flex items-center gap-2 cursor-pointer py-4">
                                        <span className="badge badge-primary badge-sm font-bold shrink-0">Q</span>
                                        <span>{faq.question}</span>
                                    </summary>
                                    <div className="collapse-content text-sm md:text-base text-base-content/85 leading-relaxed border-t border-base-300/60 pt-3 pb-4">
                                        <ReactMarkdown
                                            remarkPlugins={[remarkGfm]}
                                            rehypePlugins={[rehypeRaw]}
                                            components={components}
                                        >
                                            {faq.answer}
                                        </ReactMarkdown>
                                    </div>
                                </details>
                            ))}
                        </div>
                    </div>
                )}

                {/* References Section */}
                {rawReferencesSection.trim() && (
                    <div className="pt-8 border-t border-base-300 space-y-4">
                        <ReactMarkdown
                            remarkPlugins={[remarkGfm]}
                            rehypePlugins={[rehypeRaw]}
                            components={components}
                        >
                            {`## References\n\n${rawReferencesSection}`}
                        </ReactMarkdown>
                    </div>
                )}
            </article>
        </div>
    )
}