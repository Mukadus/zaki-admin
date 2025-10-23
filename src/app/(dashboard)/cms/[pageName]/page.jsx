import CmsDetailTemplate from "@/components/Template/CmsDetailViewTemplate";

export default async function CmsDetailPage({ params }) {
    const { pageName } = await params;
    return <CmsDetailTemplate pageName={pageName} />;
}