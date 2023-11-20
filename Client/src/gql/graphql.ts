/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type Book = {
  __typename?: 'Book';
  attentionBook?: Maybe<Scalars['Boolean']['output']>;
  author?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  itemUrl?: Maybe<Scalars['String']['output']>;
  janCode: Scalars['String']['output'];
  largeImageUrl?: Maybe<Scalars['String']['output']>;
  mediumImageUrl?: Maybe<Scalars['String']['output']>;
  myBook?: Maybe<Scalars['Boolean']['output']>;
  publisherName?: Maybe<Scalars['String']['output']>;
  title: Scalars['String']['output'];
};

export type DeleteBook = {
  janCode: Scalars['String']['input'];
  userid: Scalars['String']['input'];
};

export type FindBook = {
  janCode: Scalars['String']['input'];
  userid: Scalars['String']['input'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createBook: Book;
  deleteBook: Book;
  updateBook: Book;
};


export type MutationCreateBookArgs = {
  input: NewBook;
};


export type MutationDeleteBookArgs = {
  input: DeleteBook;
};


export type MutationUpdateBookArgs = {
  input: UpdateBook;
};

export type NewBook = {
  attentionBook?: InputMaybe<Scalars['Boolean']['input']>;
  author?: InputMaybe<Scalars['String']['input']>;
  itemUrl?: InputMaybe<Scalars['String']['input']>;
  janCode: Scalars['String']['input'];
  largeImageUrl?: InputMaybe<Scalars['String']['input']>;
  mediumImageUrl?: InputMaybe<Scalars['String']['input']>;
  myBook?: InputMaybe<Scalars['Boolean']['input']>;
  publisherName?: InputMaybe<Scalars['String']['input']>;
  title: Scalars['String']['input'];
};

export type Query = {
  __typename?: 'Query';
  findAllMyBook?: Maybe<Array<Book>>;
  findBook?: Maybe<Book>;
};


export type QueryFindBookArgs = {
  input: FindBook;
};

export type UpdateBook = {
  attentionBook?: InputMaybe<Scalars['Boolean']['input']>;
  author?: InputMaybe<Scalars['String']['input']>;
  itemUrl?: InputMaybe<Scalars['String']['input']>;
  janCode: Scalars['String']['input'];
  largeImageUrl?: InputMaybe<Scalars['String']['input']>;
  mediumImageUrl?: InputMaybe<Scalars['String']['input']>;
  myBook?: InputMaybe<Scalars['Boolean']['input']>;
  title: Scalars['String']['input'];
  userid: Scalars['String']['input'];
};

export type FindAllMyBookQueryVariables = Exact<{ [key: string]: never; }>;


export type FindAllMyBookQuery = { __typename?: 'Query', findAllMyBook?: Array<{ __typename?: 'Book', title: string, author?: string | null, janCode: string, publisherName?: string | null, itemUrl?: string | null, largeImageUrl?: string | null, mediumImageUrl?: string | null, myBook?: boolean | null }> | null };

export type CreateBookMutationVariables = Exact<{
  input: NewBook;
}>;


export type CreateBookMutation = { __typename?: 'Mutation', createBook: { __typename?: 'Book', title: string, author?: string | null, janCode: string } };


export const FindAllMyBookDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"findAllMyBook"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"findAllMyBook"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"author"}},{"kind":"Field","name":{"kind":"Name","value":"janCode"}},{"kind":"Field","name":{"kind":"Name","value":"publisherName"}},{"kind":"Field","name":{"kind":"Name","value":"itemUrl"}},{"kind":"Field","name":{"kind":"Name","value":"largeImageUrl"}},{"kind":"Field","name":{"kind":"Name","value":"mediumImageUrl"}},{"kind":"Field","name":{"kind":"Name","value":"myBook"}}]}}]}}]} as unknown as DocumentNode<FindAllMyBookQuery, FindAllMyBookQueryVariables>;
export const CreateBookDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"createBook"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"NewBook"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createBook"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"author"}},{"kind":"Field","name":{"kind":"Name","value":"janCode"}}]}}]}}]} as unknown as DocumentNode<CreateBookMutation, CreateBookMutationVariables>;