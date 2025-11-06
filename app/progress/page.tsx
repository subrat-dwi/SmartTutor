'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/components/AuthProvider';
import Sidebar from '@/components/Sidebar';

export default function ProgressPage() {
  const router = useRouter();
  const { user, loading } = useAuth();

  const progressData = [
    { subject: 'Computer Science', topics: 8, quizzes: 6, avgScore: 88, progress: 75 },
    { subject: 'Mathematics', topics: 4, quizzes: 2, avgScore: 92, progress: 50 },
    { subject: 'Physics', topics: 2, quizzes: 1, avgScore: 78, progress: 25 },
  ];

  const recentActivity = [
    { date: '2024-01-15', topic: 'Binary Trees', score: 85, type: 'quiz' },
    { date: '2024-01-14', topic: 'Machine Learning', score: 92, type: 'learn' },
    { date: '2024-01-13', topic: 'React Hooks', score: 78, type: 'quiz' },
    { date: '2024-01-12', topic: 'Data Structures', score: 88, type: 'learn' },
    { date: '2024-01-11', topic: 'Algorithms', score: 95, type: 'quiz' },
  ];

  useEffect(() => {
    if (!loading && !user) {
      router.push('/login');
    }
  }, [user, loading, router]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
        <div className="animate-spin w-8 h-8 border-4 border-indigo-600 border-t-transparent rounded-full"></div>
      </div>
    );
  }

  if (!user) return null;

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />
      
      <div className="flex-1 overflow-auto">
        <div className="p-8">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Learning Progress</h1>
            <p className="text-gray-600">Track your learning journey and achievements</p>
          </div>

          {/* Overall Stats */}
          <div className="grid md:grid-cols-4 gap-6 mb-8">
            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
              <div className="flex items-center gap-4">
                <div className="bg-blue-100 p-3 rounded-lg">
                  <span className="text-2xl">📚</span>
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">14</div>
                  <div className="text-sm text-gray-600">Topics Completed</div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
              <div className="flex items-center gap-4">
                <div className="bg-green-100 p-3 rounded-lg">
                  <span className="text-2xl">📝</span>
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">9</div>
                  <div className="text-sm text-gray-600">Quizzes Taken</div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
              <div className="flex items-center gap-4">
                <div className="bg-purple-100 p-3 rounded-lg">
                  <span className="text-2xl">🎯</span>
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">86%</div>
                  <div className="text-sm text-gray-600">Average Score</div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
              <div className="flex items-center gap-4">
                <div className="bg-yellow-100 p-3 rounded-lg">
                  <span className="text-2xl">🔥</span>
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">7</div>
                  <div className="text-sm text-gray-600">Day Streak</div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Subject Progress */}
            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">Subject Progress</h2>
              <div className="space-y-6">
                {progressData.map((subject, index) => (
                  <div key={index}>
                    <div className="flex justify-between items-center mb-2">
                      <h3 className="font-medium text-gray-900">{subject.subject}</h3>
                      <span className="text-sm text-gray-600">{subject.progress}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2 mb-3">
                      <div 
                        className="bg-indigo-600 h-2 rounded-full transition-all duration-300"
                        style={{ width: `${subject.progress}%` }}
                      ></div>
                    </div>
                    <div className="grid grid-cols-3 gap-4 text-sm text-gray-600">
                      <div>{subject.topics} topics</div>
                      <div>{subject.quizzes} quizzes</div>
                      <div>{subject.avgScore}% avg</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Recent Activity */}
            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">Recent Activity</h2>
              <div className="space-y-4">
                {recentActivity.map((activity, index) => (
                  <div key={index} className="flex items-center gap-4 p-3 bg-gray-50 rounded-lg">
                    <div className={`p-2 rounded-lg ${activity.type === 'quiz' ? 'bg-green-100' : 'bg-blue-100'}`}>
                      <span className="text-lg">{activity.type === 'quiz' ? '📝' : '📚'}</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-medium text-gray-900">{activity.topic}</h3>
                      <p className="text-sm text-gray-600">{activity.date}</p>
                    </div>
                    <div className={`text-sm font-medium px-2 py-1 rounded ${
                      activity.score >= 90 ? 'bg-green-100 text-green-800' :
                      activity.score >= 80 ? 'bg-yellow-100 text-yellow-800' :
                      'bg-red-100 text-red-800'
                    }`}>
                      {activity.score}%
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}