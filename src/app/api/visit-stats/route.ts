import { NextResponse } from 'next/server';

const OPENPANEL_API_URL = 'https://api.openpanel.dev';
const OPENPANEL_CLIENT_ID = process.env.NEXT_PUBLIC_OPENPANEL_CLIENT_ID;
const OPENPANEL_SECRET_ID = process.env.OPENPANEL_API_SECRET_ID;
const OPENPANEL_PROJECT_ID = process.env.OPENPANEL_PROJECT_ID;

export async function GET() {
  try {
    // Check if required environment variables are set
    if (!OPENPANEL_CLIENT_ID || !OPENPANEL_SECRET_ID || !OPENPANEL_PROJECT_ID) {
      return NextResponse.json({
        totalUV: '-',
        dailyUV: '-',
      });
    }

    // 获取总访问数据
    const response = await fetch(`${OPENPANEL_API_URL}/export/events?projectId=${OPENPANEL_PROJECT_ID}&event=screen_view`, {
      headers: {
        'openpanel-client-id': OPENPANEL_CLIENT_ID,
        'openpanel-client-secret': OPENPANEL_SECRET_ID,
      },
    });

    if (!response.ok) {
      throw new Error('Failed to fetch visit stats');
    }

    const data = await response.json();
    const totalUV = data?.meta?.totalCount || '-';

    // 获取今日访问数据
    const today = new Date();
    const yesterday = new Date(today);
    yesterday.setDate(yesterday.getDate() - 1);
    const yesterdayStr = yesterday.toISOString().split('T')[0];
    const todayStr = today.toISOString().split('T')[0];

    const todayResponse = await fetch(`${OPENPANEL_API_URL}/export/events?projectId=${OPENPANEL_PROJECT_ID}&event=screen_view&start=${yesterdayStr}&end=${todayStr}`, {
      headers: {
        'openpanel-client-id': OPENPANEL_CLIENT_ID,
        'openpanel-client-secret': OPENPANEL_SECRET_ID,
      },
    });

    if (!todayResponse.ok) {
      throw new Error('Failed to fetch today visit stats');
    }

    const todayData = await todayResponse.json();
    const dailyUV = todayData?.meta?.totalCount || '-';

    return NextResponse.json({
      totalUV,
      dailyUV,
    });
  } catch (error) {
    console.error('Error fetching visit stats:', error);
    return NextResponse.json({
      totalUV: '-',
      dailyUV: '-',
    });
  }
}