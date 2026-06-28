export type PrivacySection = {
  title: { en: string; ja: string };
  paragraphs: Array<{ en: string; ja: string }>;
};

export const privacyPolicy = {
  appName: "Kotobana",
  operator: {
    en: "Ryota Ueda (上田涼太)",
    ja: "上田涼太（Ryota Ueda）",
  },
  lastUpdated: "2026-06-28",
  intro: {
    en: "This Privacy Policy explains how Kotobana (“the App”), provided by Ryota Ueda (上田涼太), collects, uses, and protects information when you use the iOS application.",
    ja: "本プライバシーポリシーは、上田涼太（Ryota Ueda）が提供する iOS アプリ「Kotobana」（以下「本アプリ」）において、利用者情報をどのように取得・利用・保護するかを説明するものです。",
  },
  sections: [
    {
      title: {
        en: "Information we collect",
        ja: "収集する情報",
      },
      paragraphs: [
        {
          en: "Account identifier: When cloud sync is enabled, the App creates an anonymous account (a random user ID). Authentication tokens may be stored securely on your device (for example, in the Keychain). We do not require an email address or phone number to use the App.",
          ja: "アカウント識別子：クラウド同期を利用する場合、本アプリは匿名アカウント（ランダムなユーザー ID）を発行します。認証トークンは端末内（Keychain 等）に安全に保存されることがあります。メールアドレスや電話番号の登録は不要です。",
        },
        {
          en: "Learning data you enter: daily study time by skill category (Listening, Reading, Speaking, Writing), learning tasks and completion records, and related summaries shown in charts.",
          ja: "入力される学習データ：技能別（Listening / Reading / Speaking / Writing）の日次学習時間、学習タスクとその完了記録、およびグラフ表示のための集計結果。",
        },
        {
          en: "Garden and collection data: plant growth state, harvest results, flower inventory, bouquet layouts, and milestone titles, target dates, and achievement status.",
          ja: "庭園・コレクションデータ：植物の成長状態、収穫結果、花の在庫、花束の構成、マイルストーンのタイトル・目標日・達成状態。",
        },
        {
          en: "Optional friend features (Supabase mode only): if you choose to register, we process a display name (1–20 characters), an 8-character friend code, friend requests and friendships, milestone sharing preferences, in-app notifications about friends’ achievements, bouquet gift records, and optional short messages (up to 50 characters) attached to pending gifts.",
          ja: "任意のフレンド機能（Supabase モードのみ）：登録を選択した場合、表示名（1〜20 文字）、8 桁フレンドコード、フレンド申請・フレンド関係、マイルストーン共有設定、フレンドの達成に関するアプリ内通知、花束プレゼントの記録、および贈与待ちの花束に添える任意の短いメッセージ（最大 50 文字）を処理します。",
        },
        {
          en: "Local data on your device: when cloud sync is unavailable or before sign-in, some data may be stored locally (for example, via UserDefaults), including profile settings, learning logs, tasks, and onboarding flags.",
          ja: "端末内のローカルデータ：クラウド同期が利用できない場合やサインイン前は、プロフィール設定、学習記録、タスク、オンボーディング状態などが端末内（UserDefaults 等）に保存されることがあります。",
        },
        {
          en: "Advertising-related data: the App displays ads through Google AdMob. AdMob and its partners may collect device identifiers (such as the advertising identifier on iOS when permitted), IP address, app interactions with ads, and diagnostic information to deliver, measure, and improve advertising.",
          ja: "広告関連データ：本アプリでは Google AdMob による広告を表示しています。AdMob およびそのパートナーは、許可された場合の iOS 広告識別子、IP アドレス、広告とのやり取り、診断情報などを、広告の配信・測定・改善のために取得する場合があります。",
        },
      ],
    },
    {
      title: {
        en: "How we use information",
        ja: "情報の利用目的",
      },
      paragraphs: [
        {
          en: "We use the information above to provide and maintain App features (learning records, garden progression, milestones, optional friend features), sync your data when cloud services are enabled, prevent abuse, respond to support requests, and improve reliability.",
          ja: "上記情報は、本アプリの機能提供・維持（学習記録、庭園の進行、マイルストーン、任意のフレンド機能）、クラウドサービス利用時の同期、不正利用の防止、サポート対応、安定性向上のために利用します。",
        },
        {
          en: "Advertising: AdMob data is used to show ads in the App, limit ad frequency, measure ad performance, and help keep the free version available. Where required, we request your permission on iOS (App Tracking Transparency) before using data for tracking across apps and websites owned by other companies.",
          ja: "広告：AdMob 経由のデータは、本アプリ内での広告表示、表示頻度の調整、広告効果の測定、無料版の維持のために利用されます。必要に応じて、他社のアプリや Web サイトにわたるトラッキングにデータを用いる前に、iOS 上（App Tracking Transparency）で利用者の許可を求めます。",
        },
      ],
    },
    {
      title: {
        en: "What friends can see",
        ja: "フレンドに公開される情報",
      },
      paragraphs: [
        {
          en: "If you use friend features, friends may see your display name, bouquet summaries (recipe names and counts per recipe), and milestones only when you keep milestone sharing turned on. Learning time charts and detailed garden state are not shared with friends.",
          ja: "フレンド機能を利用する場合、フレンドには表示名、花束の概要（レシピ名とレシピごとの所有本数）、およびマイルストーン共有を ON にしている場合のマイルストーン情報が表示されることがあります。学習時間グラフや庭園の詳細状態はフレンドに共有されません。",
        },
        {
          en: "Optional gift messages are shown only on pending gift cards for the recipient and are not carried over after a gift is accepted.",
          ja: "花束プレゼントの添え書きは、受取者の pending 表示でのみ表示され、受け取り完了後には引き継がれません。",
        },
      ],
    },
    {
      title: {
        en: "Authentication, sync, and account limits",
        ja: "認証・同期・アカウントの注意",
      },
      paragraphs: [
        {
          en: "The App uses anonymous sign-in through Supabase Auth. Because the account is tied to the device session, reinstalling the App or changing devices may create a new anonymous account and you may lose access to previous cloud data and friend connections unless account recovery features are added in the future.",
          ja: "本アプリは Supabase Auth による匿名サインインを利用します。アカウントは端末上のセッションに紐づくため、再インストールや機種変更により新しい匿名アカウントが作成され、将来の復旧機能が追加されない限り、以前のクラウドデータやフレンド関係にアクセスできなくなる場合があります。",
        },
        {
          en: "Cloud data is stored on Supabase infrastructure and protected with access controls such as Row Level Security. Each user can access only their own data except where friend-sharing features explicitly allow limited visibility described above.",
          ja: "クラウドデータは Supabase 上に保存され、Row Level Security 等のアクセス制御で保護されます。フレンド共有機能で明示的に許可された範囲を除き、各ユーザーは自身のデータのみにアクセスできます。",
        },
      ],
    },
    {
      title: {
        en: "Third-party services",
        ja: "第三者サービス",
      },
      paragraphs: [
        {
          en: "Supabase (authentication and database): processes account identifiers and App data you store in the cloud. See Supabase’s privacy documentation for details.",
          ja: "Supabase（認証・データベース）：アカウント識別子およびクラウドに保存するアプリデータを処理します。詳細は Supabase のプライバシー関連ドキュメントを参照してください。",
        },
        {
          en: "Google AdMob (advertising): delivers and measures ads. Google may process device and usage information as described in Google’s Privacy Policy and the Google Advertising Policies. AdMob partners may also receive limited data to serve ads.",
          ja: "Google AdMob（広告）：広告の配信と測定を行います。Google は Google プライバシーポリシーおよび Google 広告ポリシーに従い、端末情報や利用情報を処理する場合があります。AdMob のパートナーにも、広告配信のための限定的なデータが提供されることがあります。",
        },
        {
          en: "We do not sell your personal information. We do not share learning logs or garden data with advertisers for their own independent use.",
          ja: "当方が個人情報を販売することはありません。学習記録や庭園データを、広告主が独自の目的で利用するために提供することはありません。",
        },
      ],
    },
    {
      title: {
        en: "Your choices",
        ja: "利用者の選択",
      },
      paragraphs: [
        {
          en: "Milestone sharing: you can turn off sharing of milestones with friends in the App settings (friend tab).",
          ja: "マイルストーン共有：アプリ内設定（フレンドタブ）で、フレンドへのマイルストーン共有を OFF にできます。",
        },
        {
          en: "Advertising choices (iOS): you can limit ad tracking in Settings → Privacy & Security → Tracking, and reset or limit the advertising identifier in Settings → Privacy & Security → Apple Advertising. These settings affect how personalized ads may be delivered through AdMob.",
          ja: "広告に関する選択（iOS）：設定 → プライバシーとセキュリティ → トラッキング、および設定 → プライバシーとセキュリティ → Apple の広告 で、広告トラッキングや広告識別子を制限できます。これらの設定は AdMob 経由のパーソナライズ広告に影響します。",
        },
      ],
    },
    {
      title: {
        en: "Data retention and deletion",
        ja: "保存期間と削除",
      },
      paragraphs: [
        {
          en: "We retain data for as long as necessary to provide the App. You may request deletion of your cloud account and associated data by contacting us using the details below. Some local data may remain on your device until you uninstall the App or clear app data.",
          ja: "本アプリの提供に必要な期間、データを保持します。下記連絡先より、クラウド上のアカウントおよび関連データの削除を請求できます。端末内の一部データは、アプリのアンインストールまたはアプリデータの消去まで残る場合があります。",
        },
      ],
    },
    {
      title: {
        en: "Changes to this policy",
        ja: "ポリシーの変更",
      },
      paragraphs: [
        {
          en: "We may update this Privacy Policy when we add features (such as advertising), change data practices, or comply with legal requirements. The “Last updated” date at the top indicates the latest version. Material changes may also be communicated in the App where appropriate.",
          ja: "広告の追加、データ取り扱いの変更、法令対応などに伴い、本プライバシーポリシーを更新する場合があります。最新版はページ上部の「Last updated（最終更新日）」で確認できます。重要な変更は、適宜アプリ内でも告知する場合があります。",
        },
      ],
    },
    {
      title: {
        en: "Contact",
        ja: "お問い合わせ",
      },
      paragraphs: [
        {
          en: "For privacy questions or deletion requests, contact Ryota Ueda (上田涼太) via X: https://x.com/Ryo257171824842",
          ja: "プライバシーに関するお問い合わせ・削除請求は、X（https://x.com/Ryo257171824842）より上田涼太（Ryota Ueda）までご連絡ください。",
        },
      ],
    },
  ] satisfies PrivacySection[],
} as const;
