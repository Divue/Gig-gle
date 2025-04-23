"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { useParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  ArrowLeft,
  MessageCircle,
  CheckCircle,
  XCircle,
  Download,
  Calendar,
} from "lucide-react"
import ScheduleInterviewModal from "./ScheduleInterviewModal"
import HireApplicantModal from "./HireApplicantModal"

export default function ReviewApplicationsClientPage() {
  const [applications, setApplications] = useState<any[]>([])
  const [selectedAppId, setSelectedAppId] = useState<string | null>(null)
  const [showModal, setShowModal] = useState(false)
  const [showHireModal, setShowHireModal] = useState(false)
  const [loadingHire, setLoadingHire] = useState<string | null>(null)
  const [loadingReject, setLoadingReject] = useState<string | null>(null)

  const params = useParams()
  const gigId = params?.id as string

  const fetchApplications = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/applications/gig/${gigId}`, {
      cache: "no-store",
    })
    const data = await res.json()
    setApplications(data)
  }

  useEffect(() => {
    fetchApplications()
  }, [])

  const handleScheduleClick = (appId: string) => {
    setSelectedAppId(appId)
    setShowModal(true)
  }

  const handleHireClick = (appId: string) => {
    setSelectedAppId(appId)
    setShowHireModal(true)
  }

  const handleRejectClick = async (appId: string) => {
    setLoadingReject(appId)
    try {
      await fetch(`${process.env.NEXT_PUBLIC_API_URL}/applications/reject/${appId}`, {
        method: "PATCH",
      })
      await fetchApplications()
    } catch (error) {
      console.error("Failed to reject application", error)
    } finally {
      setLoadingReject(null)
    }
  }

  const closeModal = () => {
    setSelectedAppId(null)
    setShowModal(false)
    fetchApplications()
  }

  const closeHireModal = () => {
    setShowHireModal(false)
    fetchApplications()
  }

  const appliedApplications = applications.filter((a) => a.status === "applied")
  const interviewApplications = applications.filter((a) => a.status === "interview")
  const hiredApplications = applications.filter((a) => a.status === "hired")
  const rejectedApplications = applications.filter((a) => a.status === "rejected")

  return (
    <div className="container px-4 md:px-6 py-6 md:py-10">
      <div className="max-w-4xl mx-auto">
        <Link href="/my-gigs" className="flex items-center gap-1 text-muted-foreground hover:text-foreground transition-colors w-fit mb-6">
          <ArrowLeft className="h-4 w-4" />
          <span>Back to My Gigs</span>
        </Link>

        <div className="mb-6">
          <h1 className="text-3xl font-bold tracking-tight">Applications</h1>
          <p className="text-muted-foreground">
            Review and manage applications for this position ({applications.length} total)
          </p>
        </div>

        <Tabs defaultValue="applied" className="space-y-6">
          <TabsList>
            <TabsTrigger value="applied">Applied ({appliedApplications.length})</TabsTrigger>
            <TabsTrigger value="interview">Interview ({interviewApplications.length})</TabsTrigger>
            <TabsTrigger value="hired">Hired ({hiredApplications.length})</TabsTrigger>
            <TabsTrigger value="rejected">Rejected ({rejectedApplications.length})</TabsTrigger>
          </TabsList>

          <TabsContent value="applied">
            <ApplicationList
              applications={appliedApplications}
              onScheduleClick={handleScheduleClick}
              onHireClick={handleHireClick}
              onRejectClick={handleRejectClick}
              loadingHire={loadingHire}
              loadingReject={loadingReject}
            />
          </TabsContent>

          <TabsContent value="interview">
            <ApplicationList
              applications={interviewApplications}
              onScheduleClick={handleScheduleClick}
              onHireClick={handleHireClick}
              onRejectClick={handleRejectClick}
              loadingHire={loadingHire}
              loadingReject={loadingReject}
            />
          </TabsContent>

          <TabsContent value="hired">
            <ApplicationList applications={hiredApplications} />
          </TabsContent>

          <TabsContent value="rejected">
            <ApplicationList applications={rejectedApplications} />
          </TabsContent>
        </Tabs>
      </div>

      {showModal && selectedAppId && (
        <ScheduleInterviewModal applicationId={selectedAppId} onClose={closeModal} />
      )}

      {showHireModal && selectedAppId && (
        <HireApplicantModal applicationId={selectedAppId} onClose={closeHireModal} />
      )}
    </div>
  )
}

function ApplicationList({
  applications,
  onScheduleClick,
  onHireClick,
  onRejectClick,
  loadingHire,
  loadingReject,
}: {
  applications: any[]
  onScheduleClick?: (id: string) => void
  onHireClick?: (id: string) => void
  onRejectClick?: (id: string) => void
  loadingHire?: string | null
  loadingReject?: string | null
}) {
  if (applications.length === 0) {
    return (
      <div className="text-center py-12">
        <h3 className="text-lg font-medium mb-2">No applications found</h3>
        <p className="text-muted-foreground">No applicants in this tab.</p>
      </div>
    )
  }

  return (
    <div className="grid gap-6">
      {applications.map((app) => (
        <ApplicationCard
          key={app._id}
          application={app}
          onScheduleClick={onScheduleClick}
          onHireClick={onHireClick}
          onRejectClick={onRejectClick}
          loadingHire={loadingHire}
          loadingReject={loadingReject}
        />
      ))}
    </div>
  )
}

function ApplicationCard({
  application,
  onScheduleClick,
  onHireClick,
  onRejectClick,
  loadingHire,
  loadingReject,
}: {
  application: any
  onScheduleClick?: (id: string) => void
  onHireClick?: (id: string) => void
  onRejectClick?: (id: string) => void
  loadingHire?: string | null
  loadingReject?: string | null
}) {
  return (
    <Card>
      <CardHeader className="pb-2">
        <div className="flex justify-between">
          <div className="flex gap-3">
            <Avatar>
              <AvatarImage src={application.avatar || "/placeholder.svg"} />
              <AvatarFallback>{application.name?.[0]}</AvatarFallback>
            </Avatar>
            <div>
              <CardTitle className="text-lg">{application.name}</CardTitle>
              <CardDescription>{application.seeker}</CardDescription>
            </div>
          </div>
          <div className="flex flex-col items-end gap-1">
            <Badge
              variant={
                application.status === "applied"
                  ? "outline"
                  : application.status === "interview"
                  ? "secondary"
                  : application.status === "hired"
                  ? "default"
                  : "destructive"
              }
            >
              {application.status.charAt(0).toUpperCase() + application.status.slice(1)}
            </Badge>
            <span className="text-xs text-muted-foreground">
              Applied {new Date(application.appliedAt).toLocaleDateString()}
            </span>
          </div>
        </div>
      </CardHeader>

      <CardContent className="pb-2 space-y-4">
        <div>
          <h3 className="text-sm font-medium mb-1">Cover Letter</h3>
          <p className="text-sm text-muted-foreground">{application.coverLetter || "None provided"}</p>
        </div>

        <div>
          <h3 className="text-sm font-medium mb-1">Accommodations Needed</h3>
          <p className="text-sm text-muted-foreground">{application.accommodationNeeded || "None specified"}</p>
        </div>

        {application.gender && (
          <div>
            <h3 className="text-sm font-medium mb-1">Gender</h3>
            <p className="text-sm text-muted-foreground">{application.gender}</p>
          </div>
        )}

        {application.age && (
          <div>
            <h3 className="text-sm font-medium mb-1">Age</h3>
            <p className="text-sm text-muted-foreground">{application.age}</p>
          </div>
        )}

        {application.disability && (
          <div>
            <h3 className="text-sm font-medium mb-1">Disability</h3>
            <p className="text-sm text-muted-foreground">{application.disability}</p>
          </div>
        )}

        {application.status === "interview" && application.interview?.date && (
          <div className="flex items-center gap-1 text-sm font-medium">
            <Calendar className="h-4 w-4" />
            <span>Interview on {new Date(application.interview.date).toLocaleDateString()}</span>
          </div>
        )}

        {application.status === "hired" && application.startDate && (
          <div className="flex items-center gap-1 text-sm font-medium text-green-600 dark:text-green-500">
            <CheckCircle className="h-4 w-4" />
            <span>Start date: {new Date(application.startDate).toLocaleDateString()}</span>
          </div>
        )}
      </CardContent>

      <CardFooter className="pt-2 flex flex-wrap gap-2">
        {application.pdf && (
          <a href={application.pdf} target="_blank" rel="noopener noreferrer">
            <Button variant="outline" size="sm" className="gap-1">
              <Download className="h-4 w-4" />
              Resume
            </Button>
          </a>
        )}

        <Link href={`/chat?applicant=${application.seeker}`} className="flex-1">
          <Button variant="outline" size="sm" className="w-full gap-1">
            <MessageCircle className="h-4 w-4" />
            Message
          </Button>
        </Link>

        {["applied", "interview"].includes(application.status) && onScheduleClick && (
          <Button
            variant="secondary"
            size="sm"
            className="w-full gap-1"
            onClick={() => onScheduleClick(application._id)}
          >
            <Calendar className="h-4 w-4" />
            Schedule Interview
          </Button>
        )}

        {["applied", "interview"].includes(application.status) && onHireClick && (
          <Button
            variant="default"
            size="sm"
            className="w-full gap-1"
            disabled={loadingHire === application._id}
            onClick={() => onHireClick(application._id)}
          >
            <CheckCircle className="h-4 w-4" />
            {loadingHire === application._id ? "Hiring..." : "Hire"}
          </Button>
        )}

        {["applied", "interview"].includes(application.status) && onRejectClick && (
          <Button
            variant="destructive"
            size="sm"
            className="w-full gap-1"
            disabled={loadingReject === application._id}
            onClick={() => onRejectClick(application._id)}
          >
            <XCircle className="h-4 w-4" />
            {loadingReject === application._id ? "Rejecting..." : "Reject"}
          </Button>
        )}
      </CardFooter>
    </Card>
  )
}
