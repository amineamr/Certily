import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";
import { useRouter } from "next/navigation";

export default function UnauthorizedPage() {
  const router = useRouter();

  return (
    <div className="flex h-screen w-screen items-center justify-center bg-gray-50">
      <Card className="max-w-sm w-full text-center shadow-lg">
        <CardHeader>
          <CardTitle className="text-5xl text-red-600">403</CardTitle>
          <CardDescription className="text-gray-700 mt-2">
            Unauthorized Access
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="mb-4 text-gray-600">
            You don’t have permission to view this page.
          </p>
          <Button
            onClick={() => router.push("/")}
            className="flex items-center gap-2 justify-center"
          >
            <Home size={16} />
            Go Back Home
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
