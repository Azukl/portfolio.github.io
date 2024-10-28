import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Github, Link as LinkIcon } from "lucide-react"
import Link from "next/link"

interface PortfolioProps {
  name: string;
  title: string;
  skills?: string[];
}

export default function Portfolio({ 
  name, 
  title, 
  skills = []
}: PortfolioProps) {
  return (
    <div className="min-h-screen">
      <header className="bg-primary text-primary-foreground py-12 mb-8">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-2">{name}のポートフォリオ</h1>
          <p className="text-xl">{title}</p>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <section className="mb-12">
          <Card>
            <CardHeader>
              <CardTitle>プロフィール</CardTitle>
            </CardHeader>
            <CardContent>
              <h2 className="text-2xl font-semibold mb-2">{name}</h2>
              <p className="text-muted-foreground mb-4">{title}</p>
              <div>
                <h3 className="text-lg font-medium mb-2">スキル</h3>
                {skills.length > 0 ? (
                  <ul className="list-disc list-inside">
                    {skills.map((skill, index) => (
                      <li key={index}>{skill}</li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-muted-foreground">スキルが登録されていません。</p>
                )}
              </div>
            </CardContent>
          </Card>
        </section>

        <section className="mb-12">
          <Card>
            <CardHeader>
              <CardTitle>プロジェクト紹介</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                  <span className="text-muted-foreground">動画がここに表示されます</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">プロジェクト名</h3>
                  <p className="text-muted-foreground mb-4">
                    ここにプロジェクトの説明を記入します。使用した技術や課題、解決策などを詳しく説明してください。
                  </p>
                  <Button asChild>
                    <Link href="#" className="inline-flex items-center">
                      <LinkIcon className="mr-2 h-4 w-4" />
                      プロジェクトリンク
                    </Link>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        <section className="mb-12">
          <Card>
            <CardHeader>
              <CardTitle>GitHub</CardTitle>
            </CardHeader>
            <CardContent>
              <Button asChild variant="outline">
                <Link href="https://github.com/yourusername" className="inline-flex items-center">
                  <Github className="mr-2 h-4 w-4" />
                  GitHub プロフィール
                </Link>
              </Button>
            </CardContent>
          </Card>
        </section>

        <section>
          <Card>
            <CardHeader>
              <CardTitle>過去の案件</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                <li>
                  <h3 className="text-lg font-semibold mb-2">クライアント A ホームページ</h3>
                  <p className="text-muted-foreground mb-2">
                    クライアント A 様のコーポレートサイトをデザインから実装まで担当しました。
                  </p>
                  <Button asChild variant="outline" size="sm">
                    <Link href="#" className="inline-flex items-center">
                      <LinkIcon className="mr-2 h-4 w-4" />
                      サイトを見る
                    </Link>
                  </Button>
                </li>
                {/* 他の案件も同様に追加できます */}
              </ul>
            </CardContent>
          </Card>
        </section>
      </main>
    </div>
  )
}