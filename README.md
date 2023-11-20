# ObserBooksWeb

# about

This is portfolio app.

# Server

domain: ドメイン層
infrastructure: インフラストラクチャ層
interfaces: プレゼンテーション層
usecases: ユースケース(アプリケーション)層

domain: ドメイン層（Domain Layer）は、ビジネスロジックとエンティティ（ビジネスオブジェクト）を含む、アプリケーションの中心的な部分です。ビジネスルールやロジックがここに配置されます。

infrastructure: インフラストラクチャ層（Infrastructure Layer）は、データベースアクセスや外部 API 通信などの具体的な実装を扱います。また、フレームワークに依存するコードもここに含まれます。

interfaces: プレゼンテーション層（Presentation Layer）は、ユーザーインターフェース（UI）とアプリケーションの他の部分との間の通信を処理します。リクエストの受け渡しやレスポンスの生成などが行われます。MVC や MVVM などのアーキテクチャパターンがここで適用されることが多いです。

usecases: ユースケース（Use Case）層は、アプリケーション固有のビジネスロジックを集めた部分です。ユースケースは特定の機能や操作を表し、ドメイン層とプレゼンテーション層の中継役として機能します。
